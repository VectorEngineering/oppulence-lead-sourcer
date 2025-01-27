import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogTypeSchema } from './LogTypeSchema'
import { LogPostTypeSchema } from './LogPostTypeSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const LogCreateManyEndpointInputSchema: z.ZodType<Prisma.LogCreateManyEndpointInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z
            .lazy(() => LogTypeSchema)
            .optional()
            .nullable(),
        postType: z
            .lazy(() => LogPostTypeSchema)
            .optional()
            .nullable(),
        message: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        createdAt: z.coerce.date()
    })
    .strict()

export default LogCreateManyEndpointInputSchema
