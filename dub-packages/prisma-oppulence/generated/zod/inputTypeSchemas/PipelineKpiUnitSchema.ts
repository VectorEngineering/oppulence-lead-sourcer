import { z } from 'zod';

export const PipelineKpiUnitSchema = z.enum(['currency','percentage','days','other']);

export type PipelineKpiUnitType = `${z.infer<typeof PipelineKpiUnitSchema>}`

export default PipelineKpiUnitSchema;
