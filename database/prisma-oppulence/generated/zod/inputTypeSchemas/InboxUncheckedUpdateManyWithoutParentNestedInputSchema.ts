import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutParentInputSchema } from './InboxCreateWithoutParentInputSchema'
import { InboxUncheckedCreateWithoutParentInputSchema } from './InboxUncheckedCreateWithoutParentInputSchema'
import { InboxCreateOrConnectWithoutParentInputSchema } from './InboxCreateOrConnectWithoutParentInputSchema'
import { InboxUpsertWithWhereUniqueWithoutParentInputSchema } from './InboxUpsertWithWhereUniqueWithoutParentInputSchema'
import { InboxCreateManyParentInputEnvelopeSchema } from './InboxCreateManyParentInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithWhereUniqueWithoutParentInputSchema } from './InboxUpdateWithWhereUniqueWithoutParentInputSchema'
import { InboxUpdateManyWithWhereWithoutParentInputSchema } from './InboxUpdateManyWithWhereWithoutParentInputSchema'
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema'

export const InboxUncheckedUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.InboxUncheckedUpdateManyWithoutParentNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxCreateWithoutParentInputSchema),
                z.lazy(() => InboxCreateWithoutParentInputSchema).array(),
                z.lazy(() => InboxUncheckedCreateWithoutParentInputSchema),
                z.lazy(() => InboxUncheckedCreateWithoutParentInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxCreateOrConnectWithoutParentInputSchema),
                z.lazy(() => InboxCreateOrConnectWithoutParentInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => InboxUpsertWithWhereUniqueWithoutParentInputSchema),
                z.lazy(() => InboxUpsertWithWhereUniqueWithoutParentInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxCreateManyParentInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => InboxUpdateWithWhereUniqueWithoutParentInputSchema),
                z.lazy(() => InboxUpdateWithWhereUniqueWithoutParentInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InboxUpdateManyWithWhereWithoutParentInputSchema),
                z.lazy(() => InboxUpdateManyWithWhereWithoutParentInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => InboxScalarWhereInputSchema), z.lazy(() => InboxScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default InboxUncheckedUpdateManyWithoutParentNestedInputSchema
