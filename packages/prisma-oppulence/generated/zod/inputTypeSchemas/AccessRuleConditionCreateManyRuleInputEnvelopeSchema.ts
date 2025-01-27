import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessRuleConditionCreateManyRuleInputSchema } from './AccessRuleConditionCreateManyRuleInputSchema';

export const AccessRuleConditionCreateManyRuleInputEnvelopeSchema: z.ZodType<Prisma.AccessRuleConditionCreateManyRuleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccessRuleConditionCreateManyRuleInputSchema),z.lazy(() => AccessRuleConditionCreateManyRuleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AccessRuleConditionCreateManyRuleInputEnvelopeSchema;
