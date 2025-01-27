import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateWithoutCommentsInputSchema } from './InvoiceCreateWithoutCommentsInputSchema'
import { InvoiceUncheckedCreateWithoutCommentsInputSchema } from './InvoiceUncheckedCreateWithoutCommentsInputSchema'
import { InvoiceCreateOrConnectWithoutCommentsInputSchema } from './InvoiceCreateOrConnectWithoutCommentsInputSchema'
import { InvoiceUpsertWithoutCommentsInputSchema } from './InvoiceUpsertWithoutCommentsInputSchema'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateToOneWithWhereWithoutCommentsInputSchema } from './InvoiceUpdateToOneWithWhereWithoutCommentsInputSchema'
import { InvoiceUpdateWithoutCommentsInputSchema } from './InvoiceUpdateWithoutCommentsInputSchema'
import { InvoiceUncheckedUpdateWithoutCommentsInputSchema } from './InvoiceUncheckedUpdateWithoutCommentsInputSchema'

export const InvoiceUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateOneRequiredWithoutCommentsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceCreateWithoutCommentsInputSchema),
                    z.lazy(() => InvoiceUncheckedCreateWithoutCommentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutCommentsInputSchema).optional(),
            upsert: z.lazy(() => InvoiceUpsertWithoutCommentsInputSchema).optional(),
            connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceUpdateToOneWithWhereWithoutCommentsInputSchema),
                    z.lazy(() => InvoiceUpdateWithoutCommentsInputSchema),
                    z.lazy(() => InvoiceUncheckedUpdateWithoutCommentsInputSchema)
                ])
                .optional()
        })
        .strict()

export default InvoiceUpdateOneRequiredWithoutCommentsNestedInputSchema
