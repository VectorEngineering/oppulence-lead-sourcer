import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema'

export const StageDurationListRelationFilterSchema: z.ZodType<Prisma.StageDurationListRelationFilter> = z
    .object({
        every: z.lazy(() => StageDurationWhereInputSchema).optional(),
        some: z.lazy(() => StageDurationWhereInputSchema).optional(),
        none: z.lazy(() => StageDurationWhereInputSchema).optional()
    })
    .strict()

export default StageDurationListRelationFilterSchema
