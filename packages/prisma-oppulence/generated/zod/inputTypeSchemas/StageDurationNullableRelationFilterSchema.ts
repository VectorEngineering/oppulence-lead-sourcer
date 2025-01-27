import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema'

export const StageDurationNullableRelationFilterSchema: z.ZodType<Prisma.StageDurationNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => StageDurationWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => StageDurationWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default StageDurationNullableRelationFilterSchema
