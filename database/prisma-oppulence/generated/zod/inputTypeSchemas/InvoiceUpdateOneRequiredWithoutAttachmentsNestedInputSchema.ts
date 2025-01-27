import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateWithoutAttachmentsInputSchema } from './InvoiceCreateWithoutAttachmentsInputSchema'
import { InvoiceUncheckedCreateWithoutAttachmentsInputSchema } from './InvoiceUncheckedCreateWithoutAttachmentsInputSchema'
import { InvoiceCreateOrConnectWithoutAttachmentsInputSchema } from './InvoiceCreateOrConnectWithoutAttachmentsInputSchema'
import { InvoiceUpsertWithoutAttachmentsInputSchema } from './InvoiceUpsertWithoutAttachmentsInputSchema'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateToOneWithWhereWithoutAttachmentsInputSchema } from './InvoiceUpdateToOneWithWhereWithoutAttachmentsInputSchema'
import { InvoiceUpdateWithoutAttachmentsInputSchema } from './InvoiceUpdateWithoutAttachmentsInputSchema'
import { InvoiceUncheckedUpdateWithoutAttachmentsInputSchema } from './InvoiceUncheckedUpdateWithoutAttachmentsInputSchema'

export const InvoiceUpdateOneRequiredWithoutAttachmentsNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateOneRequiredWithoutAttachmentsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceCreateWithoutAttachmentsInputSchema),
                    z.lazy(() => InvoiceUncheckedCreateWithoutAttachmentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutAttachmentsInputSchema).optional(),
            upsert: z.lazy(() => InvoiceUpsertWithoutAttachmentsInputSchema).optional(),
            connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceUpdateToOneWithWhereWithoutAttachmentsInputSchema),
                    z.lazy(() => InvoiceUpdateWithoutAttachmentsInputSchema),
                    z.lazy(() => InvoiceUncheckedUpdateWithoutAttachmentsInputSchema)
                ])
                .optional()
        })
        .strict()

export default InvoiceUpdateOneRequiredWithoutAttachmentsNestedInputSchema
