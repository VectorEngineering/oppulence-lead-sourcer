import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { KpiTypeSchema } from './KpiTypeSchema'
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema'
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema'
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema'
import { PipelineCreateNestedOneWithoutKpisInputSchema } from './PipelineCreateNestedOneWithoutKpisInputSchema'

export const PipelineKpiCreateInputSchema: z.ZodType<Prisma.PipelineKpiCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        type: z.lazy(() => KpiTypeSchema),
        target: z.number(),
        current: z.number().optional().nullable(),
        unit: z.lazy(() => PipelineKpiUnitSchema),
        description: z.string().optional().nullable(),
        frequency: z.lazy(() => PipelineKpiFrequencySchema),
        calculation: z.lazy(() => PipelineKpiCalculationSchema),
        formula: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        pipeline: z.lazy(() => PipelineCreateNestedOneWithoutKpisInputSchema)
    })
    .strict()

export default PipelineKpiCreateInputSchema
