import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema'
import { NestedEnumPipelineKpiFrequencyWithAggregatesFilterSchema } from './NestedEnumPipelineKpiFrequencyWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumPipelineKpiFrequencyFilterSchema } from './NestedEnumPipelineKpiFrequencyFilterSchema'

export const EnumPipelineKpiFrequencyWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPipelineKpiFrequencyWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => PipelineKpiFrequencySchema).optional(),
        in: z
            .lazy(() => PipelineKpiFrequencySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PipelineKpiFrequencySchema)
            .array()
            .optional(),
        not: z
            .union([z.lazy(() => PipelineKpiFrequencySchema), z.lazy(() => NestedEnumPipelineKpiFrequencyWithAggregatesFilterSchema)])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumPipelineKpiFrequencyFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumPipelineKpiFrequencyFilterSchema).optional()
    })
    .strict()

export default EnumPipelineKpiFrequencyWithAggregatesFilterSchema
