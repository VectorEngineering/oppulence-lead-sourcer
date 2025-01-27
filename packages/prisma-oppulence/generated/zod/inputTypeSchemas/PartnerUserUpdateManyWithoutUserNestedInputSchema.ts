import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserCreateWithoutUserInputSchema } from './PartnerUserCreateWithoutUserInputSchema'
import { PartnerUserUncheckedCreateWithoutUserInputSchema } from './PartnerUserUncheckedCreateWithoutUserInputSchema'
import { PartnerUserCreateOrConnectWithoutUserInputSchema } from './PartnerUserCreateOrConnectWithoutUserInputSchema'
import { PartnerUserUpsertWithWhereUniqueWithoutUserInputSchema } from './PartnerUserUpsertWithWhereUniqueWithoutUserInputSchema'
import { PartnerUserCreateManyUserInputEnvelopeSchema } from './PartnerUserCreateManyUserInputEnvelopeSchema'
import { PartnerUserWhereUniqueInputSchema } from './PartnerUserWhereUniqueInputSchema'
import { PartnerUserUpdateWithWhereUniqueWithoutUserInputSchema } from './PartnerUserUpdateWithWhereUniqueWithoutUserInputSchema'
import { PartnerUserUpdateManyWithWhereWithoutUserInputSchema } from './PartnerUserUpdateManyWithWhereWithoutUserInputSchema'
import { PartnerUserScalarWhereInputSchema } from './PartnerUserScalarWhereInputSchema'

export const PartnerUserUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PartnerUserUpdateManyWithoutUserNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PartnerUserCreateWithoutUserInputSchema),
                z.lazy(() => PartnerUserCreateWithoutUserInputSchema).array(),
                z.lazy(() => PartnerUserUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => PartnerUserUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PartnerUserCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => PartnerUserCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => PartnerUserUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => PartnerUserUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => PartnerUserCreateManyUserInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => PartnerUserWhereUniqueInputSchema), z.lazy(() => PartnerUserWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => PartnerUserWhereUniqueInputSchema), z.lazy(() => PartnerUserWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => PartnerUserWhereUniqueInputSchema), z.lazy(() => PartnerUserWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => PartnerUserWhereUniqueInputSchema), z.lazy(() => PartnerUserWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => PartnerUserUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => PartnerUserUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => PartnerUserUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => PartnerUserUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => PartnerUserScalarWhereInputSchema), z.lazy(() => PartnerUserScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default PartnerUserUpdateManyWithoutUserNestedInputSchema
