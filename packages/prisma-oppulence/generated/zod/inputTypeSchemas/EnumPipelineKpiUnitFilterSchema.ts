import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema'
import { NestedEnumPipelineKpiUnitFilterSchema } from './NestedEnumPipelineKpiUnitFilterSchema'

export const EnumPipelineKpiUnitFilterSchema: z.ZodType<Prisma.EnumPipelineKpiUnitFilter> = z
    .object({
        equals: z.lazy(() => PipelineKpiUnitSchema).optional(),
        in: z
            .lazy(() => PipelineKpiUnitSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => PipelineKpiUnitSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => PipelineKpiUnitSchema), z.lazy(() => NestedEnumPipelineKpiUnitFilterSchema)]).optional()
    })
    .strict()

export default EnumPipelineKpiUnitFilterSchema
