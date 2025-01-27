import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessRuleConditionCreateWithoutRuleInputSchema } from './AccessRuleConditionCreateWithoutRuleInputSchema'
import { AccessRuleConditionUncheckedCreateWithoutRuleInputSchema } from './AccessRuleConditionUncheckedCreateWithoutRuleInputSchema'
import { AccessRuleConditionCreateOrConnectWithoutRuleInputSchema } from './AccessRuleConditionCreateOrConnectWithoutRuleInputSchema'
import { AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInputSchema } from './AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInputSchema'
import { AccessRuleConditionCreateManyRuleInputEnvelopeSchema } from './AccessRuleConditionCreateManyRuleInputEnvelopeSchema'
import { AccessRuleConditionWhereUniqueInputSchema } from './AccessRuleConditionWhereUniqueInputSchema'
import { AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInputSchema } from './AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInputSchema'
import { AccessRuleConditionUpdateManyWithWhereWithoutRuleInputSchema } from './AccessRuleConditionUpdateManyWithWhereWithoutRuleInputSchema'
import { AccessRuleConditionScalarWhereInputSchema } from './AccessRuleConditionScalarWhereInputSchema'

export const AccessRuleConditionUpdateManyWithoutRuleNestedInputSchema: z.ZodType<Prisma.AccessRuleConditionUpdateManyWithoutRuleNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => AccessRuleConditionCreateWithoutRuleInputSchema),
                    z.lazy(() => AccessRuleConditionCreateWithoutRuleInputSchema).array(),
                    z.lazy(() => AccessRuleConditionUncheckedCreateWithoutRuleInputSchema),
                    z.lazy(() => AccessRuleConditionUncheckedCreateWithoutRuleInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => AccessRuleConditionCreateOrConnectWithoutRuleInputSchema),
                    z.lazy(() => AccessRuleConditionCreateOrConnectWithoutRuleInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInputSchema),
                    z.lazy(() => AccessRuleConditionUpsertWithWhereUniqueWithoutRuleInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => AccessRuleConditionCreateManyRuleInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema),
                    z.lazy(() => AccessRuleConditionWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInputSchema),
                    z.lazy(() => AccessRuleConditionUpdateWithWhereUniqueWithoutRuleInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => AccessRuleConditionUpdateManyWithWhereWithoutRuleInputSchema),
                    z.lazy(() => AccessRuleConditionUpdateManyWithWhereWithoutRuleInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => AccessRuleConditionScalarWhereInputSchema),
                    z.lazy(() => AccessRuleConditionScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default AccessRuleConditionUpdateManyWithoutRuleNestedInputSchema
