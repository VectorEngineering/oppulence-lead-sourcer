import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealProductWhereInputSchema } from './DealProductWhereInputSchema'

export const DealProductListRelationFilterSchema: z.ZodType<Prisma.DealProductListRelationFilter> = z
    .object({
        every: z.lazy(() => DealProductWhereInputSchema).optional(),
        some: z.lazy(() => DealProductWhereInputSchema).optional(),
        none: z.lazy(() => DealProductWhereInputSchema).optional()
    })
    .strict()

export default DealProductListRelationFilterSchema
