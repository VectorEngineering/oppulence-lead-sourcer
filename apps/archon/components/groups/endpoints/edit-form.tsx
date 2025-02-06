'use client'

import type * as z from 'zod'

// UI Imports
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useFieldArray, useForm } from 'react-hook-form'

import { updateEndpointSchema as formSchema } from '@/app/actions/endpoints/schema'
import { updateEndpoint } from '@/app/actions/endpoints/update-endpoint-action'
import { parseActionError } from '@/app/actions/safe-action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import type { Endpoint } from '@dub/prisma-archon/client'
import { X } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import { toast } from 'sonner'
// next imports
import { validationOptions } from '@/lib/validation'
// type imports
import { zodResolver } from '@hookform/resolvers/zod'

type DomainValues = z.infer<typeof formSchema>

export default function EditForm({ id, endpoint }: { id: string; endpoint: Endpoint }) {
    const { execute, isExecuting } = useAction(updateEndpoint, {
        onSuccess() {
            toast.success('Endpoint updated successfully.')
        },
        onError({ error }) {
            toast.error(parseActionError(error))
        }
    })

    const defaultValues: Partial<DomainValues> = {
        id: id,
        name: endpoint.name,
        schema: endpoint.schema as any,
        formEnabled: endpoint.formEnabled,
        successUrl: endpoint.successUrl ?? undefined,
        failUrl: endpoint.failUrl ?? undefined,
        webhookEnabled: endpoint.webhookEnabled,
        webhook: endpoint.webhook ?? undefined
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
        mode: 'onChange'
    })

    const { fields, append, remove } = useFieldArray({
        name: 'schema',
        control: form.control
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => execute(values))}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Endpoint Name</FormLabel>
                            <FormControl className='bg-secondary'>
                                <Input placeholder='Name your endpoint...' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Schema */}
                <div className='my-6 grid gap-2 border-y py-6'>
                    <h3 className='text-sm font-medium'>Schema</h3>
                    {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                    {fields.map((field: any, index: any) => (
                        <div className='grid w-full grid-cols-2 items-start gap-4' key={field.id}>
                            <FormField
                                control={form.control}
                                key={field.id}
                                name={`schema.${index}.key`}
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl className='w-full'>
                                            <div className='flex items-center gap-2'>
                                                <Input {...field} className='bg-secondary w-full' placeholder='Field name ...' />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`schema.${index}.value`}
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <div className='flex items-center gap-2'>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl className='bg-secondary'>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {validationOptions.map((type, index: number) => (
                                                        <SelectItem key={`${index}-${type.name}`} value={type.name}>
                                                            {type.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <Button
                                                type='button'
                                                className='h-10 w-10 border p-1 transition-all'
                                                variant='link'
                                                onClick={() => remove(index)}
                                            >
                                                <X className='h-4 w-4' />
                                            </Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    ))}

                    <Button
                        onClick={() => {
                            append({ key: '', value: 'string' })
                        }}
                    >
                        Add Field +
                    </Button>
                </div>

                {/* Redirect Urls */}
                <div className='my-6 space-y-2 border-b pb-6'>
                    <FormField
                        control={form.control}
                        name='formEnabled'
                        render={({ field }) => (
                            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                                <div className='space-y-0.5'>
                                    <FormLabel className=''>Enable HTML Form Posting</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} aria-readonly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {form.watch('formEnabled') && (
                        <>
                            <p className='text-muted-foreground text-xs italic'>
                                *Redirect URLs are only used when posting a lead by HTML form
                            </p>
                            <FormField
                                control={form.control}
                                name='successUrl'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Success Redirect URL</FormLabel>
                                        <FormControl className='bg-secondary'>
                                            <Input
                                                placeholder='Success URL...'
                                                {...field}
                                                value={field.value || undefined}
                                                disabled={!form.watch('formEnabled')}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='failUrl'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fail Redirect URL</FormLabel>
                                        <FormControl className='bg-secondary'>
                                            <Input
                                                placeholder='Fail URL...'
                                                {...field}
                                                value={field.value || undefined}
                                                disabled={!form.watch('formEnabled')}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </>
                    )}
                </div>

                {/* Webhook */}
                <div className='space-y-2'>
                    <FormField
                        control={form.control}
                        name='webhookEnabled'
                        render={({ field }) => (
                            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
                                <div className='space-y-0.5'>
                                    <FormLabel className=''>Include Webhook</FormLabel>
                                </div>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} aria-readonly />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {form.watch('webhookEnabled') && (
                        <FormField
                            control={form.control}
                            name='webhook'
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel>Webhook</FormLabel>
                                    <FormControl className='w-full'>
                                        <div className='flex items-center gap-2'>
                                            <Input
                                                {...field}
                                                value={field.value || undefined}
                                                className='bg-secondary w-full'
                                                placeholder='Webhook URL ...'
                                                disabled={!form.watch('webhookEnabled')}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                </div>

                <Button type='submit' variant='secondary' className='mt-12' disabled={isExecuting}>
                    Update Endpoint
                </Button>
            </form>
        </Form>
    )
}
