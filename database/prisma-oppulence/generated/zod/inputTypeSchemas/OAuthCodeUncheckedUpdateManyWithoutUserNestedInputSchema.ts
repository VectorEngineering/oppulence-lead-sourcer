import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeCreateWithoutUserInputSchema } from './OAuthCodeCreateWithoutUserInputSchema'
import { OAuthCodeUncheckedCreateWithoutUserInputSchema } from './OAuthCodeUncheckedCreateWithoutUserInputSchema'
import { OAuthCodeCreateOrConnectWithoutUserInputSchema } from './OAuthCodeCreateOrConnectWithoutUserInputSchema'
import { OAuthCodeUpsertWithWhereUniqueWithoutUserInputSchema } from './OAuthCodeUpsertWithWhereUniqueWithoutUserInputSchema'
import { OAuthCodeCreateManyUserInputEnvelopeSchema } from './OAuthCodeCreateManyUserInputEnvelopeSchema'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeUpdateWithWhereUniqueWithoutUserInputSchema } from './OAuthCodeUpdateWithWhereUniqueWithoutUserInputSchema'
import { OAuthCodeUpdateManyWithWhereWithoutUserInputSchema } from './OAuthCodeUpdateManyWithWhereWithoutUserInputSchema'
import { OAuthCodeScalarWhereInputSchema } from './OAuthCodeScalarWhereInputSchema'

export const OAuthCodeUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.OAuthCodeUncheckedUpdateManyWithoutUserNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthCodeCreateWithoutUserInputSchema),
                    z.lazy(() => OAuthCodeCreateWithoutUserInputSchema).array(),
                    z.lazy(() => OAuthCodeUncheckedCreateWithoutUserInputSchema),
                    z.lazy(() => OAuthCodeUncheckedCreateWithoutUserInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => OAuthCodeCreateOrConnectWithoutUserInputSchema),
                    z.lazy(() => OAuthCodeCreateOrConnectWithoutUserInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => OAuthCodeUpsertWithWhereUniqueWithoutUserInputSchema),
                    z.lazy(() => OAuthCodeUpsertWithWhereUniqueWithoutUserInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => OAuthCodeCreateManyUserInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => OAuthCodeWhereUniqueInputSchema), z.lazy(() => OAuthCodeWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => OAuthCodeWhereUniqueInputSchema), z.lazy(() => OAuthCodeWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => OAuthCodeWhereUniqueInputSchema), z.lazy(() => OAuthCodeWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => OAuthCodeWhereUniqueInputSchema), z.lazy(() => OAuthCodeWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => OAuthCodeUpdateWithWhereUniqueWithoutUserInputSchema),
                    z.lazy(() => OAuthCodeUpdateWithWhereUniqueWithoutUserInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => OAuthCodeUpdateManyWithWhereWithoutUserInputSchema),
                    z.lazy(() => OAuthCodeUpdateManyWithWhereWithoutUserInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => OAuthCodeScalarWhereInputSchema), z.lazy(() => OAuthCodeScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default OAuthCodeUncheckedUpdateManyWithoutUserNestedInputSchema
