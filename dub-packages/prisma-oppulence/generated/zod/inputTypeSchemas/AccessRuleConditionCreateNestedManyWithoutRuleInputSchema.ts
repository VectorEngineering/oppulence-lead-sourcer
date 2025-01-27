import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccessRuleConditionCreateWithoutRuleInputSchema } from './AccessRuleConditionCreateWithoutRuleInputSchema';
import { AccessRuleConditionUncheckedCreateWithoutRuleInputSchema } from './AccessRuleConditionUncheckedCreateWithoutRuleInputSchema';
import { AccessRuleConditionCreateOrConnectWithoutRuleInputSchema } from './AccessRuleConditionCreateOrConnectWithoutRuleInputSchema';
import { AccessRuleConditionCreateManyRuleInputEnvelopeSchema } from './AccessRuleConditionCreateManyRuleInputEnvelopeSchema';
import { AccessRuleConditionWhereUniqueInputSchema } from './AccessRuleConditionWhereUniqueInputSchema';

export const AccessRuleConditionCreateNestedManyWithoutRuleInputSchema: z.ZodType<Prisma.AccessRuleConditionCreateNestedManyWithoutRuleInput> = z.object({
  create: z.union([ z.lazy(() => AccessRuleConditionCreateWithoutRuleInputSchema),z.lazy(() => AccessRuleConditionCreateWithoutRuleInputSchema).array(),z.lazy(() => AccessRuleConditionUncheckedCreateWithoutRuleInputSchema),z.lazy(() => AccessRuleConditionUncheckedCreateWithoutRuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccessRuleConditionCreateOrConnectWithoutRuleInputSchema),z.lazy(() => AccessRuleConditionCreateOrConnectWithoutRuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccessRuleConditionCreateManyRuleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),z.lazy(() => AccessRuleConditionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AccessRuleConditionCreateNestedManyWithoutRuleInputSchema;
