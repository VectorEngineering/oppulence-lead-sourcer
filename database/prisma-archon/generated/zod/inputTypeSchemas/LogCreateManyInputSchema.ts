import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogTypeSchema } from './LogTypeSchema'
import { LogPostTypeSchema } from './LogPostTypeSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const LogCreateManyInputSchema: z.ZodType<Prisma.LogCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        endpointId: z.string(),
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

export default LogCreateManyInputSchema
