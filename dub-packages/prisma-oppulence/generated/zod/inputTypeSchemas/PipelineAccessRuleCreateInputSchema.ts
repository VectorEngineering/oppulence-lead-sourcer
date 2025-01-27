import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessLevelSchema } from './AccessLevelSchema';
import { AccessRuleConditionCreateNestedManyWithoutRuleInputSchema } from './AccessRuleConditionCreateNestedManyWithoutRuleInputSchema';
import { PipelineCreateNestedOneWithoutAccessRulesInputSchema } from './PipelineCreateNestedOneWithoutAccessRulesInputSchema';

export const PipelineAccessRuleCreateInputSchema: z.ZodType<Prisma.PipelineAccessRuleCreateInput> = z.object({
  id: z.string().cuid().optional(),
  roleId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  teamId: z.string().optional().nullable(),
  accessLevel: z.lazy(() => AccessLevelSchema),
  conditions: z.lazy(() => AccessRuleConditionCreateNestedManyWithoutRuleInputSchema).optional(),
  pipeline: z.lazy(() => PipelineCreateNestedOneWithoutAccessRulesInputSchema)
}).strict();

export default PipelineAccessRuleCreateInputSchema;
