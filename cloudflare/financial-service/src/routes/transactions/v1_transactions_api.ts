import { TransactionsParamsSchema, TransactionsSchema } from './schema'
import { createRoute, z } from '@hono/zod-openapi'

import { AccountType } from '@/utils/account'
import { App } from '@/hono/app'
import { openApiErrorResponses as ErrorResponses } from '@/errors'
import { Provider } from '@/providers'
import { Routes } from '@/route-definitions/routes'
import { createErrorResponse } from '@/utils/error'
import { env } from 'hono/adapter'

const route = createRoute({
    tags: [...Routes.Transactions.list.tags],
    operationId: Routes.Transactions.list.operationId,
    method: Routes.Transactions.list.method,
    path: Routes.Transactions.list.path,
    security: [{ bearerAuth: [] }],
    summary: Routes.Transactions.list.summary,
    description: Routes.Transactions.list.description,
    request: {
        query: TransactionsParamsSchema
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: TransactionsSchema
                }
            },
            description: 'Retrieve transactions'
        },
        ...ErrorResponses
    }
})

export type GetTransactionsApiRoute = typeof route
export type GetTransactionsApiRequest = z.infer<typeof route.request.query>
export type GetTransactionsApiResponse = z.infer<(typeof route.responses)[200]['content']['application/json']['schema']>

/**
 * Handler for the index route to retrieve transactions.
 * @param c - The context object containing request and environment information.
 * @returns A JSON response with transaction data or an error.
 */
export const registerRegularTransactionsApi = (app: App) => {
    app.openapi(route, async (c) => {
        const envs = env(c)
        const { provider, accountId, accountType, latest, accessToken } = c.req.valid('query')

        const api = new Provider({
            provider,
            fetcher: c.env.TELLER_CERT,
            kv: c.env.KV,
            envs,
            r2: c.env.BANK_STATEMENTS
        })

        try {
            const data = await api.getTransactions({
                accountId,
                accessToken,
                accountType: accountType as AccountType,
                latest
            })

            return c.json(
                {
                    data: data.data,
                    cursor: data.cursor
                },
                200
            )
        } catch (error) {
            const { message, code } = createErrorResponse(error, c.get('requestId'))
            return c.json(
                {
                    error: {
                        message,
                        docs: 'https://engineering-docs.solomon-ai.app/errors',
                        requestId: c.get('requestId'),
                        code
                    }
                },
                400
            )
        }
    })
}
