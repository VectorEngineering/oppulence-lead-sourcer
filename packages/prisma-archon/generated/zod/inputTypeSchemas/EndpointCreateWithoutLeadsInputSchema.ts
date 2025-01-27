import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { UserCreateNestedOneWithoutEndpointsInputSchema } from './UserCreateNestedOneWithoutEndpointsInputSchema'
import { LogCreateNestedManyWithoutEndpointInputSchema } from './LogCreateNestedManyWithoutEndpointInputSchema'

export const EndpointCreateWithoutLeadsInputSchema: z.ZodType<Prisma.EndpointCreateWithoutLeadsInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        schema: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        enabled: z.boolean().optional(),
        webhookEnabled: z.boolean().optional(),
        emailNotify: z.boolean().optional(),
        webhook: z.string().optional().nullable(),
        formEnabled: z.boolean().optional(),
        successUrl: z.string().optional().nullable(),
        failUrl: z.string().optional().nullable(),
        token: z.string().optional().nullable(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date(),
        user: z.lazy(() => UserCreateNestedOneWithoutEndpointsInputSchema),
        logs: z.lazy(() => LogCreateNestedManyWithoutEndpointInputSchema).optional()
    })
    .strict()

export default EndpointCreateWithoutLeadsInputSchema
