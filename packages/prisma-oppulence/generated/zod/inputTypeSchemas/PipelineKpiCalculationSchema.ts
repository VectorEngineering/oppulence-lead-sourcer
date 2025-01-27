import { z } from 'zod';

export const PipelineKpiCalculationSchema = z.enum(['formula','calculation']);

export type PipelineKpiCalculationType = `${z.infer<typeof PipelineKpiCalculationSchema>}`

export default PipelineKpiCalculationSchema;
