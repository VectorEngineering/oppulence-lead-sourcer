import { ValidationType } from '@/app/actions/schema'
import { z } from 'zod'

export const createEndpointFormSchema = z.object({
    name: z.string().min(1, 'Not a valid name.'),
    schema: z.array(
        z.object({
            key: z.string().min(1, { message: 'Please enter a valid field name.' }),
            value: ValidationType
        })
    ),
    formEnabled: z.boolean(),
    successUrl: z.string().url().optional(),
    failUrl: z.string().url().optional(),
    webhookEnabled: z.boolean(),
    webhook: z.string().url().optional()
})

export const deleteEndpointSchema = z.object({
    id: z.string()
})

export const getEndpointByIdSchema = z.object({
    id: z.string()
})

export const toggleEndpointSchema = z.object({
    id: z.string()
})

export const getPostingEndpointByIdSchema = z.object({
    id: z.string()
})

export const updateEndpointSchema = z.object({
    id: z.string(),
    name: z.string().min(1, 'Name is required'),
    schema: z
        .array(
            z.object({
                key: z.string().min(1, { message: 'Please enter a valid field name.' }),
                value: ValidationType
            })
        )
        .optional(),
    enabled: z.boolean().optional(),
    webhookEnabled: z.boolean().optional(),
    emailNotify: z.boolean().optional(),
    webhook: z.string().url('Invalid webhook URL').nullable().optional(),
    formEnabled: z.boolean().optional(),
    successUrl: z.string().url('Invalid success URL').nullable().optional(),
    failUrl: z.string().url('Invalid fail URL').nullable().optional()
})
