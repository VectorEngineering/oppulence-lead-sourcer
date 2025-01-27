import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessLevelSchema } from './AccessLevelSchema';

export const PipelineAccessRuleCreateManyInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  pipelineId: z.string(),
  roleId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  teamId: z.string().optional().nullable(),
  accessLevel: z.lazy(() => AccessLevelSchema)
}).strict();

export default PipelineAccessRuleCreateManyInputSchema;
