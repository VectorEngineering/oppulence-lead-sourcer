import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessRuleConditionWhereUniqueInputSchema } from './AccessRuleConditionWhereUniqueInputSchema'
import { AccessRuleConditionUpdateWithoutRuleInputSchema } from './AccessRuleConditionUpdateWithoutRuleInputSchema'
import { AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema } from './AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema'
import { AccessRuleConditionCreateWithoutRuleInputSchema } from './AccessRuleConditionCreateWithoutRuleInputSchema'
import { AccessRuleConditionUncheckedCreateWithoutRuleInputSchema } from './AccessRuleConditionUncheckedCreateWithoutRuleInputSchema'

export const AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInputSchema: z.ZodType<Prisma.AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInput> =
    z
        .object({
            where: z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => AccessRuleConditionUpdateWithoutRuleInputSchema),
                z.lazy(() => AccessRuleConditionUncheckedUpdateWithoutRuleInputSchema)
            ]),
            create: z.union([
                z.lazy(() => AccessRuleConditionCreateWithoutRuleInputSchema),
                z.lazy(() => AccessRuleConditionUncheckedCreateWithoutRuleInputSchema)
            ])
        })
        .strict()

export default AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInputSchema
