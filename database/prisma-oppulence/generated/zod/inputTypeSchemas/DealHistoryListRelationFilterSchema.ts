import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealHistoryWhereInputSchema } from './DealHistoryWhereInputSchema'

export const DealHistoryListRelationFilterSchema: z.ZodType<Prisma.DealHistoryListRelationFilter> = z
    .object({
        every: z.lazy(() => DealHistoryWhereInputSchema).optional(),
        some: z.lazy(() => DealHistoryWhereInputSchema).optional(),
        none: z.lazy(() => DealHistoryWhereInputSchema).optional()
    })
    .strict()

export default DealHistoryListRelationFilterSchema
