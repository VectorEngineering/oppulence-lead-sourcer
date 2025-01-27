import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessRuleConditionWhereInputSchema } from './AccessRuleConditionWhereInputSchema';

export const AccessRuleConditionListRelationFilterSchema: z.ZodType<Prisma.AccessRuleConditionListRelationFilter> = z.object({
  every: z.lazy(() => AccessRuleConditionWhereInputSchema).optional(),
  some: z.lazy(() => AccessRuleConditionWhereInputSchema).optional(),
  none: z.lazy(() => AccessRuleConditionWhereInputSchema).optional()
}).strict();

export default AccessRuleConditionListRelationFilterSchema;
