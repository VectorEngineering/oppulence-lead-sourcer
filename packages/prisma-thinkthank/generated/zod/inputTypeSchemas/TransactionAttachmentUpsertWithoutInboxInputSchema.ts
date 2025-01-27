import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentUpdateWithoutInboxInputSchema } from './TransactionAttachmentUpdateWithoutInboxInputSchema'
import { TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema'
import { TransactionAttachmentCreateWithoutInboxInputSchema } from './TransactionAttachmentCreateWithoutInboxInputSchema'
import { TransactionAttachmentUncheckedCreateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedCreateWithoutInboxInputSchema'
import { TransactionAttachmentWhereInputSchema } from './TransactionAttachmentWhereInputSchema'

export const TransactionAttachmentUpsertWithoutInboxInputSchema: z.ZodType<Prisma.TransactionAttachmentUpsertWithoutInboxInput> = z
    .object({
        update: z.union([
            z.lazy(() => TransactionAttachmentUpdateWithoutInboxInputSchema),
            z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema)
        ]),
        create: z.union([
            z.lazy(() => TransactionAttachmentCreateWithoutInboxInputSchema),
            z.lazy(() => TransactionAttachmentUncheckedCreateWithoutInboxInputSchema)
        ]),
        where: z.lazy(() => TransactionAttachmentWhereInputSchema).optional()
    })
    .strict()

export default TransactionAttachmentUpsertWithoutInboxInputSchema
