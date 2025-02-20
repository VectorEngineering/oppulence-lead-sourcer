import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateWithoutUserInputSchema } from './RestrictedTokenCreateWithoutUserInputSchema'
import { RestrictedTokenUncheckedCreateWithoutUserInputSchema } from './RestrictedTokenUncheckedCreateWithoutUserInputSchema'
import { RestrictedTokenCreateOrConnectWithoutUserInputSchema } from './RestrictedTokenCreateOrConnectWithoutUserInputSchema'
import { RestrictedTokenUpsertWithWhereUniqueWithoutUserInputSchema } from './RestrictedTokenUpsertWithWhereUniqueWithoutUserInputSchema'
import { RestrictedTokenCreateManyUserInputEnvelopeSchema } from './RestrictedTokenCreateManyUserInputEnvelopeSchema'
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema'
import { RestrictedTokenUpdateWithWhereUniqueWithoutUserInputSchema } from './RestrictedTokenUpdateWithWhereUniqueWithoutUserInputSchema'
import { RestrictedTokenUpdateManyWithWhereWithoutUserInputSchema } from './RestrictedTokenUpdateManyWithWhereWithoutUserInputSchema'
import { RestrictedTokenScalarWhereInputSchema } from './RestrictedTokenScalarWhereInputSchema'

export const RestrictedTokenUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateManyWithoutUserNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => RestrictedTokenCreateWithoutUserInputSchema),
                z.lazy(() => RestrictedTokenCreateWithoutUserInputSchema).array(),
                z.lazy(() => RestrictedTokenUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => RestrictedTokenUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => RestrictedTokenCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => RestrictedTokenCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => RestrictedTokenUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => RestrictedTokenUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => RestrictedTokenCreateManyUserInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => RestrictedTokenWhereUniqueInputSchema), z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => RestrictedTokenWhereUniqueInputSchema), z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => RestrictedTokenWhereUniqueInputSchema), z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => RestrictedTokenWhereUniqueInputSchema), z.lazy(() => RestrictedTokenWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => RestrictedTokenUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => RestrictedTokenUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => RestrictedTokenUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => RestrictedTokenUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => RestrictedTokenScalarWhereInputSchema), z.lazy(() => RestrictedTokenScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default RestrictedTokenUpdateManyWithoutUserNestedInputSchema
