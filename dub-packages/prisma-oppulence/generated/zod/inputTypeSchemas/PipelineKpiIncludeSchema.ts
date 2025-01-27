import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"

export const PipelineKpiIncludeSchema: z.ZodType<Prisma.PipelineKpiInclude> = z.object({
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
}).strict()

export default PipelineKpiIncludeSchema;
