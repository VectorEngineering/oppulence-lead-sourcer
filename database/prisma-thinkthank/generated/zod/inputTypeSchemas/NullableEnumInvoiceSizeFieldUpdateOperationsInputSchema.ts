import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceSizeSchema } from './InvoiceSizeSchema'

export const NullableEnumInvoiceSizeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumInvoiceSizeFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => InvoiceSizeSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumInvoiceSizeFieldUpdateOperationsInputSchema
