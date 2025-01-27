import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionAttachmentCreateWithoutInboxInputSchema } from './TransactionAttachmentCreateWithoutInboxInputSchema'
import { TransactionAttachmentUncheckedCreateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedCreateWithoutInboxInputSchema'
import { TransactionAttachmentCreateOrConnectWithoutInboxInputSchema } from './TransactionAttachmentCreateOrConnectWithoutInboxInputSchema'
import { TransactionAttachmentUpsertWithoutInboxInputSchema } from './TransactionAttachmentUpsertWithoutInboxInputSchema'
import { TransactionAttachmentWhereInputSchema } from './TransactionAttachmentWhereInputSchema'
import { TransactionAttachmentWhereUniqueInputSchema } from './TransactionAttachmentWhereUniqueInputSchema'
import { TransactionAttachmentUpdateToOneWithWhereWithoutInboxInputSchema } from './TransactionAttachmentUpdateToOneWithWhereWithoutInboxInputSchema'
import { TransactionAttachmentUpdateWithoutInboxInputSchema } from './TransactionAttachmentUpdateWithoutInboxInputSchema'
import { TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema } from './TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema'

export const TransactionAttachmentUpdateOneWithoutInboxNestedInputSchema: z.ZodType<Prisma.TransactionAttachmentUpdateOneWithoutInboxNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionAttachmentCreateWithoutInboxInputSchema),
                    z.lazy(() => TransactionAttachmentUncheckedCreateWithoutInboxInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => TransactionAttachmentCreateOrConnectWithoutInboxInputSchema).optional(),
            upsert: z.lazy(() => TransactionAttachmentUpsertWithoutInboxInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => TransactionAttachmentWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => TransactionAttachmentWhereInputSchema)]).optional(),
            connect: z.lazy(() => TransactionAttachmentWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => TransactionAttachmentUpdateToOneWithWhereWithoutInboxInputSchema),
                    z.lazy(() => TransactionAttachmentUpdateWithoutInboxInputSchema),
                    z.lazy(() => TransactionAttachmentUncheckedUpdateWithoutInboxInputSchema)
                ])
                .optional()
        })
        .strict()

export default TransactionAttachmentUpdateOneWithoutInboxNestedInputSchema
