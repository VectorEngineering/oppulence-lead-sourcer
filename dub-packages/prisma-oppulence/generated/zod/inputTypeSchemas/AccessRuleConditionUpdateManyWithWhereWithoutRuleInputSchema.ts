import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessRuleConditionScalarWhereInputSchema } from './AccessRuleConditionScalarWhereInputSchema';
import { AccessRuleConditionUpdateManyMutationInputSchema } from './AccessRuleConditionUpdateManyMutationInputSchema';
import { AccessRuleConditionUncheckedUpdateManyWithoutRuleInputSchema } from './AccessRuleConditionUncheckedUpdateManyWithoutRuleInputSchema';

export const AccessRuleConditionUpdateManyWithWhereWithoutRuleInputSchema: z.ZodType<Prisma.AccessRuleConditionUpdateManyWithWhereWithoutRuleInput> = z.object({
  where: z.lazy(() => AccessRuleConditionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccessRuleConditionUpdateManyMutationInputSchema),z.lazy(() => AccessRuleConditionUncheckedUpdateManyWithoutRuleInputSchema) ]),
}).strict();

export default AccessRuleConditionUpdateManyWithWhereWithoutRuleInputSchema;
