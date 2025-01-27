import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAccessRuleCreateNestedOneWithoutConditionsInputSchema } from './PipelineAccessRuleCreateNestedOneWithoutConditionsInputSchema';

export const AccessRuleConditionCreateInputSchema: z.ZodType<Prisma.AccessRuleConditionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field: z.string(),
  operator: z.string(),
  value: z.string(),
  rule: z.lazy(() => PipelineAccessRuleCreateNestedOneWithoutConditionsInputSchema)
}).strict();

export default AccessRuleConditionCreateInputSchema;
