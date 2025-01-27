import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineTypeSchema } from './PipelineTypeSchema'

export const NestedEnumPipelineTypeFilterSchema: z.ZodType<Prisma.NestedEnumPipelineTypeFilter> = z
    .object({
        equals: z.lazy(() => PipelineTypeSchema).optional(),
        in: z
            .lazy(() => PipelineTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PipelineTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => PipelineTypeSchema), z.lazy(() => NestedEnumPipelineTypeFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumPipelineTypeFilterSchema
