import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutProjectInputSchema } from './InboxCreateWithoutProjectInputSchema'
import { InboxUncheckedCreateWithoutProjectInputSchema } from './InboxUncheckedCreateWithoutProjectInputSchema'
import { InboxCreateOrConnectWithoutProjectInputSchema } from './InboxCreateOrConnectWithoutProjectInputSchema'
import { InboxUpsertWithWhereUniqueWithoutProjectInputSchema } from './InboxUpsertWithWhereUniqueWithoutProjectInputSchema'
import { InboxCreateManyProjectInputEnvelopeSchema } from './InboxCreateManyProjectInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithWhereUniqueWithoutProjectInputSchema } from './InboxUpdateWithWhereUniqueWithoutProjectInputSchema'
import { InboxUpdateManyWithWhereWithoutProjectInputSchema } from './InboxUpdateManyWithWhereWithoutProjectInputSchema'
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema'

export const InboxUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.InboxUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxCreateWithoutProjectInputSchema),
                z.lazy(() => InboxCreateWithoutProjectInputSchema).array(),
                z.lazy(() => InboxUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => InboxUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => InboxCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => InboxUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => InboxUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => InboxUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => InboxUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InboxUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => InboxUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => InboxScalarWhereInputSchema), z.lazy(() => InboxScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default InboxUpdateManyWithoutProjectNestedInputSchema
