import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagCreateWithoutLinkInputSchema } from './LinkTagCreateWithoutLinkInputSchema'
import { LinkTagUncheckedCreateWithoutLinkInputSchema } from './LinkTagUncheckedCreateWithoutLinkInputSchema'
import { LinkTagCreateOrConnectWithoutLinkInputSchema } from './LinkTagCreateOrConnectWithoutLinkInputSchema'
import { LinkTagUpsertWithWhereUniqueWithoutLinkInputSchema } from './LinkTagUpsertWithWhereUniqueWithoutLinkInputSchema'
import { LinkTagCreateManyLinkInputEnvelopeSchema } from './LinkTagCreateManyLinkInputEnvelopeSchema'
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema'
import { LinkTagUpdateWithWhereUniqueWithoutLinkInputSchema } from './LinkTagUpdateWithWhereUniqueWithoutLinkInputSchema'
import { LinkTagUpdateManyWithWhereWithoutLinkInputSchema } from './LinkTagUpdateManyWithWhereWithoutLinkInputSchema'
import { LinkTagScalarWhereInputSchema } from './LinkTagScalarWhereInputSchema'

export const LinkTagUncheckedUpdateManyWithoutLinkNestedInputSchema: z.ZodType<Prisma.LinkTagUncheckedUpdateManyWithoutLinkNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkTagCreateWithoutLinkInputSchema),
                z.lazy(() => LinkTagCreateWithoutLinkInputSchema).array(),
                z.lazy(() => LinkTagUncheckedCreateWithoutLinkInputSchema),
                z.lazy(() => LinkTagUncheckedCreateWithoutLinkInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LinkTagCreateOrConnectWithoutLinkInputSchema),
                z.lazy(() => LinkTagCreateOrConnectWithoutLinkInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LinkTagUpsertWithWhereUniqueWithoutLinkInputSchema),
                z.lazy(() => LinkTagUpsertWithWhereUniqueWithoutLinkInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LinkTagCreateManyLinkInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LinkTagWhereUniqueInputSchema), z.lazy(() => LinkTagWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LinkTagWhereUniqueInputSchema), z.lazy(() => LinkTagWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LinkTagWhereUniqueInputSchema), z.lazy(() => LinkTagWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LinkTagWhereUniqueInputSchema), z.lazy(() => LinkTagWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LinkTagUpdateWithWhereUniqueWithoutLinkInputSchema),
                z.lazy(() => LinkTagUpdateWithWhereUniqueWithoutLinkInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LinkTagUpdateManyWithWhereWithoutLinkInputSchema),
                z.lazy(() => LinkTagUpdateManyWithWhereWithoutLinkInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LinkTagScalarWhereInputSchema), z.lazy(() => LinkTagScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LinkTagUncheckedUpdateManyWithoutLinkNestedInputSchema
