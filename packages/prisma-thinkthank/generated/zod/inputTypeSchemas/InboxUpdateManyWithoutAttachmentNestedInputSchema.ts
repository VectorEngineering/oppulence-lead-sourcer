import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutAttachmentInputSchema } from './InboxCreateWithoutAttachmentInputSchema'
import { InboxUncheckedCreateWithoutAttachmentInputSchema } from './InboxUncheckedCreateWithoutAttachmentInputSchema'
import { InboxCreateOrConnectWithoutAttachmentInputSchema } from './InboxCreateOrConnectWithoutAttachmentInputSchema'
import { InboxUpsertWithWhereUniqueWithoutAttachmentInputSchema } from './InboxUpsertWithWhereUniqueWithoutAttachmentInputSchema'
import { InboxCreateManyAttachmentInputEnvelopeSchema } from './InboxCreateManyAttachmentInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithWhereUniqueWithoutAttachmentInputSchema } from './InboxUpdateWithWhereUniqueWithoutAttachmentInputSchema'
import { InboxUpdateManyWithWhereWithoutAttachmentInputSchema } from './InboxUpdateManyWithWhereWithoutAttachmentInputSchema'
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema'

export const InboxUpdateManyWithoutAttachmentNestedInputSchema: z.ZodType<Prisma.InboxUpdateManyWithoutAttachmentNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxCreateWithoutAttachmentInputSchema),
                z.lazy(() => InboxCreateWithoutAttachmentInputSchema).array(),
                z.lazy(() => InboxUncheckedCreateWithoutAttachmentInputSchema),
                z.lazy(() => InboxUncheckedCreateWithoutAttachmentInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxCreateOrConnectWithoutAttachmentInputSchema),
                z.lazy(() => InboxCreateOrConnectWithoutAttachmentInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => InboxUpsertWithWhereUniqueWithoutAttachmentInputSchema),
                z.lazy(() => InboxUpsertWithWhereUniqueWithoutAttachmentInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxCreateManyAttachmentInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => InboxUpdateWithWhereUniqueWithoutAttachmentInputSchema),
                z.lazy(() => InboxUpdateWithWhereUniqueWithoutAttachmentInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InboxUpdateManyWithWhereWithoutAttachmentInputSchema),
                z.lazy(() => InboxUpdateManyWithWhereWithoutAttachmentInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => InboxScalarWhereInputSchema), z.lazy(() => InboxScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default InboxUpdateManyWithoutAttachmentNestedInputSchema
