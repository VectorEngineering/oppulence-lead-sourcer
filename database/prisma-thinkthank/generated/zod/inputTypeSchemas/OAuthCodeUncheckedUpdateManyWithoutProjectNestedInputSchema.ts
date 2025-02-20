import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeCreateWithoutProjectInputSchema } from './OAuthCodeCreateWithoutProjectInputSchema'
import { OAuthCodeUncheckedCreateWithoutProjectInputSchema } from './OAuthCodeUncheckedCreateWithoutProjectInputSchema'
import { OAuthCodeCreateOrConnectWithoutProjectInputSchema } from './OAuthCodeCreateOrConnectWithoutProjectInputSchema'
import { OAuthCodeUpsertWithWhereUniqueWithoutProjectInputSchema } from './OAuthCodeUpsertWithWhereUniqueWithoutProjectInputSchema'
import { OAuthCodeCreateManyProjectInputEnvelopeSchema } from './OAuthCodeCreateManyProjectInputEnvelopeSchema'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeUpdateWithWhereUniqueWithoutProjectInputSchema } from './OAuthCodeUpdateWithWhereUniqueWithoutProjectInputSchema'
import { OAuthCodeUpdateManyWithWhereWithoutProjectInputSchema } from './OAuthCodeUpdateManyWithWhereWithoutProjectInputSchema'
import { OAuthCodeScalarWhereInputSchema } from './OAuthCodeScalarWhereInputSchema'

export const OAuthCodeUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.OAuthCodeUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthCodeCreateWithoutProjectInputSchema),
                    z.lazy(() => OAuthCodeCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => OAuthCodeUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => OAuthCodeUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => OAuthCodeCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => OAuthCodeCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => OAuthCodeUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => OAuthCodeUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => OAuthCodeCreateManyProjectInputEnvelopeSchema).optional(),
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
                    z.lazy(() => OAuthCodeUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => OAuthCodeUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => OAuthCodeUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => OAuthCodeUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => OAuthCodeScalarWhereInputSchema), z.lazy(() => OAuthCodeScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default OAuthCodeUncheckedUpdateManyWithoutProjectNestedInputSchema
