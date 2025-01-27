import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutAttachmentInputSchema } from './InboxCreateWithoutAttachmentInputSchema'
import { InboxUncheckedCreateWithoutAttachmentInputSchema } from './InboxUncheckedCreateWithoutAttachmentInputSchema'
import { InboxCreateOrConnectWithoutAttachmentInputSchema } from './InboxCreateOrConnectWithoutAttachmentInputSchema'
import { InboxCreateManyAttachmentInputEnvelopeSchema } from './InboxCreateManyAttachmentInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'

export const InboxUncheckedCreateNestedManyWithoutAttachmentInputSchema: z.ZodType<Prisma.InboxUncheckedCreateNestedManyWithoutAttachmentInput> =
    z
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
            createMany: z.lazy(() => InboxCreateManyAttachmentInputEnvelopeSchema).optional(),
            connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default InboxUncheckedCreateNestedManyWithoutAttachmentInputSchema
