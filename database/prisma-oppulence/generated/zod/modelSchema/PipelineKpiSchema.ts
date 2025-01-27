import { z } from 'zod'
import { KpiTypeSchema } from '../inputTypeSchemas/KpiTypeSchema'
import { PipelineKpiUnitSchema } from '../inputTypeSchemas/PipelineKpiUnitSchema'
import { PipelineKpiFrequencySchema } from '../inputTypeSchemas/PipelineKpiFrequencySchema'
import { PipelineKpiCalculationSchema } from '../inputTypeSchemas/PipelineKpiCalculationSchema'

/////////////////////////////////////////
// PIPELINE KPI SCHEMA
/////////////////////////////////////////

export const PipelineKpiSchema = z.object({
    type: KpiTypeSchema,
    unit: PipelineKpiUnitSchema,
    frequency: PipelineKpiFrequencySchema,
    calculation: PipelineKpiCalculationSchema,
    id: z.string().cuid(),
    pipelineId: z.string(),
    name: z.string(),
    target: z.number(),
    current: z.number().nullish(),
    description: z.string().nullish(),
    formula: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type PipelineKpi = z.infer<typeof PipelineKpiSchema>

/////////////////////////////////////////
// PIPELINE KPI OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PipelineKpiOptionalDefaultsSchema = PipelineKpiSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type PipelineKpiOptionalDefaults = z.infer<typeof PipelineKpiOptionalDefaultsSchema>

export default PipelineKpiSchema
