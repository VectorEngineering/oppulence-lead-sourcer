import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessRuleConditionWhereUniqueInputSchema } from './AccessRuleConditionWhereUniqueInputSchema';
import { AccessRuleConditionUpdateWithoutRuleInputSchema } from './AccessRuleConditionUpdateWithoutRuleInputSchema';
import { AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema } from './AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema';

export const AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInputSchema: z.ZodType<Prisma.AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInput> = z.object({
  where: z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccessRuleConditionUpdateWithoutRuleInputSchema),z.lazy(() => AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema) ]),
}).strict();

export default AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInputSchema;
