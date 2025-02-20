import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'

export const InboxNullableRelationFilterSchema: z.ZodType<Prisma.InboxNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => InboxWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => InboxWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default InboxNullableRelationFilterSchema
