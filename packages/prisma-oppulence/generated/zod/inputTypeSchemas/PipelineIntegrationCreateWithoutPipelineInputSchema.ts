import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationTypeSchema } from './IntegrationTypeSchema';

export const PipelineIntegrationCreateWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineIntegrationCreateWithoutPipelineInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.lazy(() => IntegrationTypeSchema),
  name: z.string(),
  provider: z.string(),
  config: z.string(),
  isActive: z.boolean().optional(),
  lastSyncedAt: z.coerce.date().optional().nullable()
}).strict();

export default PipelineIntegrationCreateWithoutPipelineInputSchema;
