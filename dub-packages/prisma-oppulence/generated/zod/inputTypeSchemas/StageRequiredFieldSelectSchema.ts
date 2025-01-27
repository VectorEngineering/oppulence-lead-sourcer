import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageArgsSchema } from "../outputTypeSchemas/PipelineStageArgsSchema"

export const StageRequiredFieldSelectSchema: z.ZodType<Prisma.StageRequiredFieldSelect> = z.object({
  id: z.boolean().optional(),
  stageId: z.boolean().optional(),
  fieldName: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  stage: z.union([z.boolean(),z.lazy(() => PipelineStageArgsSchema)]).optional(),
}).strict()

export default StageRequiredFieldSelectSchema;
