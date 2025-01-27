import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutUserInputSchema } from './LinkCreateWithoutUserInputSchema'
import { LinkUncheckedCreateWithoutUserInputSchema } from './LinkUncheckedCreateWithoutUserInputSchema'
import { LinkCreateOrConnectWithoutUserInputSchema } from './LinkCreateOrConnectWithoutUserInputSchema'
import { LinkUpsertWithWhereUniqueWithoutUserInputSchema } from './LinkUpsertWithWhereUniqueWithoutUserInputSchema'
import { LinkCreateManyUserInputEnvelopeSchema } from './LinkCreateManyUserInputEnvelopeSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithWhereUniqueWithoutUserInputSchema } from './LinkUpdateWithWhereUniqueWithoutUserInputSchema'
import { LinkUpdateManyWithWhereWithoutUserInputSchema } from './LinkUpdateManyWithWhereWithoutUserInputSchema'
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema'

export const LinkUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutUserNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkCreateWithoutUserInputSchema),
                z.lazy(() => LinkCreateWithoutUserInputSchema).array(),
                z.lazy(() => LinkUncheckedCreateWithoutUserInputSchema),
                z.lazy(() => LinkUncheckedCreateWithoutUserInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LinkCreateOrConnectWithoutUserInputSchema),
                z.lazy(() => LinkCreateOrConnectWithoutUserInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LinkUpsertWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => LinkUpsertWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LinkCreateManyUserInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LinkUpdateWithWhereUniqueWithoutUserInputSchema),
                z.lazy(() => LinkUpdateWithWhereUniqueWithoutUserInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LinkUpdateManyWithWhereWithoutUserInputSchema),
                z.lazy(() => LinkUpdateManyWithWhereWithoutUserInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LinkScalarWhereInputSchema), z.lazy(() => LinkScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LinkUncheckedUpdateManyWithoutUserNestedInputSchema
