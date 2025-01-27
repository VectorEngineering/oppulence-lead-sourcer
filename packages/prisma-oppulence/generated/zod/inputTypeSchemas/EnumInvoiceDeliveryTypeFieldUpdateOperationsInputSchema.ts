import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema'

export const EnumInvoiceDeliveryTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInvoiceDeliveryTypeFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => InvoiceDeliveryTypeSchema).optional()
        })
        .strict()

export default EnumInvoiceDeliveryTypeFieldUpdateOperationsInputSchema
