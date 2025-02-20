import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutStatusSchema } from './PayoutStatusSchema'
import { PayoutTypeSchema } from './PayoutTypeSchema'

export const PayoutCreateManyInputSchema: z.ZodType<Prisma.PayoutCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        programId: z.string(),
        partnerId: z.string(),
        invoiceId: z.string().optional().nullable(),
        amount: z.number().int().optional(),
        currency: z.string().optional(),
        status: z.lazy(() => PayoutStatusSchema).optional(),
        type: z.lazy(() => PayoutTypeSchema).optional(),
        description: z.string().optional().nullable(),
        periodStart: z.coerce.date().optional().nullable(),
        periodEnd: z.coerce.date().optional().nullable(),
        quantity: z.number().int().optional().nullable(),
        stripeTransferId: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        paidAt: z.coerce.date().optional().nullable()
    })
    .strict()

export default PayoutCreateManyInputSchema
