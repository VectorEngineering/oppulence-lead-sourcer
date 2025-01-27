import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateWithoutHistoryInputSchema } from './InvoiceCreateWithoutHistoryInputSchema'
import { InvoiceUncheckedCreateWithoutHistoryInputSchema } from './InvoiceUncheckedCreateWithoutHistoryInputSchema'
import { InvoiceCreateOrConnectWithoutHistoryInputSchema } from './InvoiceCreateOrConnectWithoutHistoryInputSchema'
import { InvoiceUpsertWithoutHistoryInputSchema } from './InvoiceUpsertWithoutHistoryInputSchema'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateToOneWithWhereWithoutHistoryInputSchema } from './InvoiceUpdateToOneWithWhereWithoutHistoryInputSchema'
import { InvoiceUpdateWithoutHistoryInputSchema } from './InvoiceUpdateWithoutHistoryInputSchema'
import { InvoiceUncheckedUpdateWithoutHistoryInputSchema } from './InvoiceUncheckedUpdateWithoutHistoryInputSchema'

export const InvoiceUpdateOneRequiredWithoutHistoryNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateOneRequiredWithoutHistoryNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceCreateWithoutHistoryInputSchema),
                    z.lazy(() => InvoiceUncheckedCreateWithoutHistoryInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutHistoryInputSchema).optional(),
            upsert: z.lazy(() => InvoiceUpsertWithoutHistoryInputSchema).optional(),
            connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceUpdateToOneWithWhereWithoutHistoryInputSchema),
                    z.lazy(() => InvoiceUpdateWithoutHistoryInputSchema),
                    z.lazy(() => InvoiceUncheckedUpdateWithoutHistoryInputSchema)
                ])
                .optional()
        })
        .strict()

export default InvoiceUpdateOneRequiredWithoutHistoryNestedInputSchema
