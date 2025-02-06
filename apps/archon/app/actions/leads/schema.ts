import { z } from 'zod'

export const createLeadSchema = z.object({
    endpointId: z.string(),
    data: z.record(z.union([z.string(), z.number(), z.boolean()]))
})

export const deleteLeadSchema = z.object({
    id: z.string()
})

export const getLeadDataSchema = z.object({
    id: z.string()
})

export const getLeadsByEndpointSchema = z.object({
    id: z.string()
})
