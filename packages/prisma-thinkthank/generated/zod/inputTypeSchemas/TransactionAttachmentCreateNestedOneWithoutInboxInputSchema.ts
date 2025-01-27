import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentCreateWithoutInboxInputSchema } from './TransactionAttachmentCreateWithoutInboxInputSchema'
import { TransactionAttachmentUncheckedCreateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedCreateWithoutInboxInputSchema'
import { TransactionAttachmentCreateOrConnectWithoutInboxInputSchema } from './TransactionAttachmentCreateOrConnectWithoutInboxInputSchema'
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema'

export const TransactionAttachmentCreateNestedOneWithoutInboxInputSchema: z.ZodType<Prisma.TransactionAttachmentCreateNestedOneWithoutInboxInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionAttachmentCreateWithoutInboxInputSchema),
                    z.lazy(() => TransactionAttachmentUncheckedCreateWithoutInboxInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionAttachmentCreateOrConnectWithoutInboxInputSchema).optional(),
            connect: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).optional()
        })
        .strict()

export default TransactionAttachmentCreateNestedOneWithoutInboxInputSchema
