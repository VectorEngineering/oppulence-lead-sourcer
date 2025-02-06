import { convertToCorrectTypes, generateDynamicSchema, validateAndParseData } from '@/lib/validation'

import { getPostingEndpointById } from '@/app/actions/endpoints/get-posting-endpoint-by-id-action'
import { createLead } from '@/app/actions/leads/create-lead-action'
import { createLog } from '@/app/actions/logs/create-log-action'
import { getLeadCount } from '@/app/actions/users/get-lead-count-action'
import { getUserPlan } from '@/app/actions/users/get-user-plan-action'
import { incrementLeadCount } from '@/app/actions/users/increment-lead-count-action'
import { constructBodyFromURLParameters } from '@/lib/helpers/construct-body'
import { getErrorMessage } from '@/lib/helpers/error-message'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

/**
 * API route for posting a lead using POST
 */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id: string = (await params).id

    try {
        const headersList = await headers()
        const authorization = headersList.get('authorization')

        if (!authorization || !authorization.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized. No valid bearer token provided.' }, { status: 401 })
        }

        const token = authorization.split(' ')[1]
        const data = await request.json()
        const endpoint = await getPostingEndpointById({ id: id })

        if (!endpoint) return NextResponse.json({ message: 'Endpoint not found.' }, { status: 404 })

        if (endpoint.data?.token !== token) {
            return NextResponse.json({ message: 'Unauthorized. Invalid token provided.' }, { status: 401 })
        }

        if (!endpoint.data?.enabled) {
            return NextResponse.json({ message: 'Endpoint is disabled.' }, { status: 403 })
        }

        const planResult = await getUserPlan({ endpointId: id })
        if (!planResult?.data) {
            return NextResponse.json({ message: 'Could not determine user plan.' }, { status: 500 })
        }
        const plan = planResult.data

        const leadCountResult = await getLeadCount({ endpointId: id })
        if (!leadCountResult?.data) {
            return NextResponse.json({ message: 'Could not determine lead count.' }, { status: 500 })
        }
        const leadCount = leadCountResult.data

        let leadLimit: number
        switch (plan) {
            case 'free':
                leadLimit = 100
                break
            case 'lite':
                leadLimit = 1000
                break
            case 'pro':
                leadLimit = 10000
                break
            case 'business':
                leadLimit = 50000
                break
            case 'enterprise':
                leadLimit = 999999
                break
            default:
                leadLimit = 100 // Fallback to free tier limit
        }

        if (leadCount >= leadLimit) {
            return NextResponse.json({ message: 'Lead limit reached.' }, { status: 429 })
        }

        const schema = endpoint?.data?.schema as GeneralSchema[]
        const dynamicSchema = generateDynamicSchema(schema)
        const parsedData = validateAndParseData(dynamicSchema, data)

        if (!parsedData.success) {
            await createLog({
                postType: 'http',
                type: 'error',
                message: JSON.stringify(parsedData.error.format()),
                endpointId: id
            })

            return NextResponse.json({ errors: parsedData.error.format() }, { status: 400 })
        }

        const leadId = await createLead({ endpointId: id, data: parsedData.data })

        await createLog({
            postType: 'http',
            type: 'success',
            message: `${endpoint.data?.name} -> Lead created`,
            endpointId: id
        })
        await incrementLeadCount({ endpointId: id })

        // webhook posting -- eventually make this a background job
        if (endpoint.data?.webhookEnabled && endpoint.data?.webhook) {
            // Only wait 3 second(s) for a response
            const webhookController = new AbortController()
            const webhookTimeoutPromise = new Promise<never>((_, reject) => {
                setTimeout(async () => {
                    // create a log of the timeout error
                    await createLog({
                        postType: 'webhook',
                        type: 'error',
                        message: 'Webhook timed out.',
                        endpointId: id
                    })
                    webhookController.abort()
                    reject(new Error('Request timed out'))
                }, 3000)
            })
            const webhookFetchPromise: Promise<Response> = fetch(endpoint.data?.webhook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parsedData.data),
                signal: webhookController.signal
            })
            const webhookResponse = await Promise.race([webhookFetchPromise, webhookTimeoutPromise])

            if (!webhookResponse.ok) {
                const contentType = webhookResponse.headers.get('Content-Type')
                let errorData: string
                if (contentType?.includes('application/json')) {
                    errorData = await webhookResponse.json()
                } else if (contentType?.includes('text')) {
                    errorData = await webhookResponse.text()
                } else {
                    errorData = 'Received non-text response'
                }
                await createLog({
                    postType: 'webhook',
                    type: 'error',
                    message: errorData,
                    endpointId: id
                })
            } else {
                createLog({
                    postType: 'webhook',
                    type: 'success',
                    message: `${endpoint.data?.webhook} -> Webhook successful`,
                    endpointId: id
                })
            }
        }

        return NextResponse.json({ success: true, id: leadId })
    } catch (error: unknown) {
        await createLog({
            postType: 'http',
            type: 'error',
            message: getErrorMessage(error),
            endpointId: id
        })

        console.error(error)

        return NextResponse.json({ error: 'An error occurred.' }, { status: 500 })
    }
}

/**
 * API route for posting a lead using GET
 *
 * Only used when the user is posting via HTML form element
 */
export async function GET(
    request: Request,
    {
        params
    }: {
        params: Promise<{ id: string }>
    }
) {
    const id: string = (await params).id

    try {
        const headersList = await headers()
        const referer = headersList.get('referer')
        const { searchParams } = new URL(request.url)

        const endpoint = await getPostingEndpointById({ id })

        if (!endpoint) {
            return NextResponse.json({ message: 'Endpoint not found.' }, { status: 404 })
        }

        if (!endpoint.data?.enabled) {
            return NextResponse.json({ message: 'Endpoint is disabled.' }, { status: 403 })
        }

        const planResult = await getUserPlan({ endpointId: id })
        if (!planResult?.data) {
            return NextResponse.json({ message: 'Could not determine user plan.' }, { status: 500 })
        }
        const plan = planResult.data

        const leadCountResult = await getLeadCount({ endpointId: id })
        if (!leadCountResult?.data) {
            return NextResponse.json({ message: 'Could not determine lead count.' }, { status: 500 })
        }
        const leadCount = leadCountResult.data

        let leadLimit: number
        switch (plan) {
            case 'free':
                leadLimit = 100
                break
            case 'lite':
                leadLimit = 1000
                break
            case 'pro':
                leadLimit = 10000
                break
            case 'business':
                leadLimit = 50000
                break
            case 'enterprise':
                leadLimit = 999999
                break
            default:
                leadLimit = 100 // Fallback to free tier limit
        }

        if (leadCount >= leadLimit) {
            return NextResponse.json({ message: 'Lead limit reached.' }, { status: 429 })
        }

        const rawData = constructBodyFromURLParameters(searchParams)
        const schema = endpoint?.data?.schema as GeneralSchema[]
        const data = convertToCorrectTypes(rawData, schema)
        const dynamicSchema = generateDynamicSchema(schema)
        const parsedData = validateAndParseData(dynamicSchema, data)

        if (!parsedData.success) {
            createLog({
                postType: 'http',
                type: 'error',
                message: JSON.stringify(parsedData.error.format()),
                endpointId: id
            })

            return NextResponse.redirect(new URL(endpoint?.data?.failUrl || referer || '/fail'))
        }

        const leadId = await createLead({ endpointId: id, data: parsedData.data })

        await createLog({
            postType: 'http',
            type: 'success',
            message: `${endpoint.data?.name} -> Lead created`,
            endpointId: id
        })
        await incrementLeadCount({ endpointId: id })

        // webhook posting -- eventually make this a background job
        if (endpoint.data?.webhookEnabled && endpoint.data?.webhook) {
            // Only wait 3 second(s) for a response
            const webhookController = new AbortController()
            const webhookTimeoutPromise = new Promise<never>((_, reject) => {
                setTimeout(async () => {
                    await createLog({
                        postType: 'webhook',
                        type: 'error',
                        message: 'Webhook timed out.',
                        endpointId: id
                    })
                    webhookController.abort()
                    reject(new Error('Request timed out'))
                }, 3000)
            })
            const webhookFetchPromise: Promise<Response> = fetch(endpoint.data?.webhook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parsedData.data),
                signal: webhookController.signal
            })
            const webhookResponse = await Promise.race([webhookFetchPromise, webhookTimeoutPromise])

            if (!webhookResponse.ok) {
                const contentType = webhookResponse.headers.get('Content-Type')
                let errorData: string
                if (contentType?.includes('application/json')) {
                    errorData = await webhookResponse.json()
                } else if (contentType?.includes('text')) {
                    errorData = await webhookResponse.text()
                } else {
                    errorData = 'Received non-text response'
                }
                await createLog({
                    postType: 'webhook',
                    type: 'error',
                    message: errorData,
                    endpointId: id
                })
            } else {
                createLog({
                    postType: 'webhook',
                    type: 'success',
                    message: `${endpoint.data?.webhook} -> Webhook successful`,
                    endpointId: id
                })
            }
        }

        return NextResponse.redirect(new URL(endpoint?.data?.successUrl || referer || '/success'))
    } catch (error: unknown) {
        await createLog({
            postType: 'http',
            type: 'error',
            message: getErrorMessage(error),
            endpointId: id as string
        })

        console.error(error)

        return NextResponse.json({ error: 'An error occurred.' }, { status: 500 })
    }
}
