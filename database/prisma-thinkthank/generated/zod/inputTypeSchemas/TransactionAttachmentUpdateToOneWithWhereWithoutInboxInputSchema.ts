import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentWhereInputSchema } from './TransactionAttachmentWhereInputSchema'
import { TransactionAttachmentUpdateWithoutInboxInputSchema } from './TransactionAttachmentUpdateWithoutInboxInputSchema'
import { TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema'

export const TransactionAttachmentUpdateToOneWithWhereWithoutInboxInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateToOneWithWhereWithoutInboxInput> =
    z
        .object({
            where: z.lazy(() => TransactionAttachmentWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => TransactionAttachmentUpdateWithoutInboxInputSchema),
                z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema)
            ])
        })
        .strict()

export default TransactionAttachmentUpdateToOneWithWhereWithoutInboxInputSchema
