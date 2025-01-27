import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessLevelSchema } from './AccessLevelSchema';

export const PipelineAccessRuleCreateManyPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateManyPipelineInput> = z.object({
  id: z.string().cuid().optional(),
  roleId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  teamId: z.string().optional().nullable(),
  accessLevel: z.lazy(() => AccessLevelSchema)
}).strict();

export default PipelineAccessRuleCreateManyPipelineInputSchema;
