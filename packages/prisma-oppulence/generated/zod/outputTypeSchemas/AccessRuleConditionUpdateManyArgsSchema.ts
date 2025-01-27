import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccessRuleConditionUpdateManyMutationInputSchema } from '../inputTypeSchemas/AccessRuleConditionUpdateManyMutationInputSchema'
import { AccessRuleConditionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AccessRuleConditionUncheckedUpdateManyInputSchema'
import { AccessRuleConditionWhereInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereInputSchema'

export const AccessRuleConditionUpdateManyArgsSchema: z.ZodType<Prisma.AccessRuleConditionUpdateManyArgs> = z.object({
  data: z.union([ AccessRuleConditionUpdateManyMutationInputSchema,AccessRuleConditionUncheckedUpdateManyInputSchema ]),
  where: AccessRuleConditionWhereInputSchema.optional(),
}).strict() ;

export default AccessRuleConditionUpdateManyArgsSchema;
