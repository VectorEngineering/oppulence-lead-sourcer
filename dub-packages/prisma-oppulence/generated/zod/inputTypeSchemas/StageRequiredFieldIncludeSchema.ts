import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineStageArgsSchema } from "../outputTypeSchemas/PipelineStageArgsSchema"

export const StageRequiredFieldIncludeSchema: z.ZodType<Prisma.StageRequiredFieldInclude> = z.object({
  stage: z.union([z.boolean(),z.lazy(() => PipelineStageArgsSchema)]).optional(),
}).strict()

export default StageRequiredFieldIncludeSchema;
