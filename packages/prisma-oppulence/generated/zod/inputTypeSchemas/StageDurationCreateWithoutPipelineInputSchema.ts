import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineStageCreateNestedOneWithoutStageDurationInputSchema } from './PipelineStageCreateNestedOneWithoutStageDurationInputSchema';

export const StageDurationCreateWithoutPipelineInputSchema: z.ZodType<Prisma.StageDurationCreateWithoutPipelineInput> = z.object({
  id: z.string().cuid().optional(),
  expectedDays: z.number().int(),
  warningDays: z.number().int().optional().nullable(),
  criticalDays: z.number().int().optional().nullable(),
  stage: z.lazy(() => PipelineStageCreateNestedOneWithoutStageDurationInputSchema)
}).strict();

export default StageDurationCreateWithoutPipelineInputSchema;
