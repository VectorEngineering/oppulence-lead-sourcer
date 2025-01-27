import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadUncheckedCreateNestedManyWithoutEndpointInputSchema } from './LeadUncheckedCreateNestedManyWithoutEndpointInputSchema'
import { LogUncheckedCreateNestedManyWithoutEndpointInputSchema } from './LogUncheckedCreateNestedManyWithoutEndpointInputSchema'

export const EndpointUncheckedCreateInputSchema: z.ZodType<Prisma.EndpointUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        userId: z.string(),
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
        leads: z.lazy(() => LeadUncheckedCreateNestedManyWithoutEndpointInputSchema).optional(),
        logs: z.lazy(() => LogUncheckedCreateNestedManyWithoutEndpointInputSchema).optional()
    })
    .strict()

export default EndpointUncheckedCreateInputSchema
