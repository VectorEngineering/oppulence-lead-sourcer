import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessLevelSchema } from './AccessLevelSchema';
import { AccessRuleConditionCreateNestedManyWithoutRuleInputSchema } from './AccessRuleConditionCreateNestedManyWithoutRuleInputSchema';

export const PipelineAccessRuleCreateWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateWithoutPipelineInput> = z.object({
  id: z.string().cuid().optional(),
  roleId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  teamId: z.string().optional().nullable(),
  accessLevel: z.lazy(() => AccessLevelSchema),
  conditions: z.lazy(() => AccessRuleConditionCreateNestedManyWithoutRuleInputSchema).optional()
}).strict();

export default PipelineAccessRuleCreateWithoutPipelineInputSchema;
