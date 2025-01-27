import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"

export const PipelineIntegrationIncludeSchema: z.ZodType<Prisma.PipelineIntegrationInclude> = z.object({
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
}).strict()

export default PipelineIntegrationIncludeSchema;
