import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineIntegrationSelectSchema } from '../inputTypeSchemas/PipelineIntegrationSelectSchema';
import { PipelineIntegrationIncludeSchema } from '../inputTypeSchemas/PipelineIntegrationIncludeSchema';

export const PipelineIntegrationArgsSchema: z.ZodType<Prisma.PipelineIntegrationDefaultArgs> = z.object({
  select: z.lazy(() => PipelineIntegrationSelectSchema).optional(),
  include: z.lazy(() => PipelineIntegrationIncludeSchema).optional(),
}).strict();

export default PipelineIntegrationArgsSchema;
