import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema'

export const NestedEnumPipelineKpiCalculationFilterSchema: z.ZodType<Prisma.NestedEnumPipelineKpiCalculationFilter> = z
    .object({
        equals: z.lazy(() => PipelineKpiCalculationSchema).optional(),
        in: z
            .lazy(() => PipelineKpiCalculationSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PipelineKpiCalculationSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => PipelineKpiCalculationSchema), z.lazy(() => NestedEnumPipelineKpiCalculationFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumPipelineKpiCalculationFilterSchema
