import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessRuleConditionWhereUniqueInputSchema } from './AccessRuleConditionWhereUniqueInputSchema'
import { AccessRuleConditionCreateWithoutRuleInputSchema } from './AccessRuleConditionCreateWithoutRuleInputSchema'
import { AccessRuleConditionUncheckedCreateWithoutRuleInputSchema } from './AccessRuleConditionUncheckedCreateWithoutRuleInputSchema'

export const AccessRuleConditionCreateOrConnectWithoutRuleInputSchema: z.ZodType<Prisma.AccessRuleConditionCreateOrConnectWithoutRuleInput> =
    z
        .object({
            where: z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => AccessRuleConditionCreateWithoutRuleInputSchema),
                z.lazy(() => AccessRuleConditionUncheckedCreateWithoutRuleInputSchema)
            ])
        })
        .strict()

export default AccessRuleConditionCreateOrConnectWithoutRuleInputSchema
