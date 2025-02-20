import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutProjectInputSchema } from './LinkCreateWithoutProjectInputSchema'
import { LinkUncheckedCreateWithoutProjectInputSchema } from './LinkUncheckedCreateWithoutProjectInputSchema'
import { LinkCreateOrConnectWithoutProjectInputSchema } from './LinkCreateOrConnectWithoutProjectInputSchema'
import { LinkUpsertWithWhereUniqueWithoutProjectInputSchema } from './LinkUpsertWithWhereUniqueWithoutProjectInputSchema'
import { LinkCreateManyProjectInputEnvelopeSchema } from './LinkCreateManyProjectInputEnvelopeSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithWhereUniqueWithoutProjectInputSchema } from './LinkUpdateWithWhereUniqueWithoutProjectInputSchema'
import { LinkUpdateManyWithWhereWithoutProjectInputSchema } from './LinkUpdateManyWithWhereWithoutProjectInputSchema'
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema'

export const LinkUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.LinkUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkCreateWithoutProjectInputSchema),
                z.lazy(() => LinkCreateWithoutProjectInputSchema).array(),
                z.lazy(() => LinkUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => LinkUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LinkCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => LinkCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LinkUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => LinkUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LinkCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LinkUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => LinkUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LinkUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => LinkUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LinkScalarWhereInputSchema), z.lazy(() => LinkScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LinkUpdateManyWithoutProjectNestedInputSchema
