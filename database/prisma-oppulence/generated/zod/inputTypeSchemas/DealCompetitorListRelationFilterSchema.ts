import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorWhereInputSchema } from './DealCompetitorWhereInputSchema'

export const DealCompetitorListRelationFilterSchema: z.ZodType<Prisma.DealCompetitorListRelationFilter> = z
    .object({
        every: z.lazy(() => DealCompetitorWhereInputSchema).optional(),
        some: z.lazy(() => DealCompetitorWhereInputSchema).optional(),
        none: z.lazy(() => DealCompetitorWhereInputSchema).optional()
    })
    .strict()

export default DealCompetitorListRelationFilterSchema
