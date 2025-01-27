import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateNestedOneWithoutProductsInputSchema } from './DealCreateNestedOneWithoutProductsInputSchema'

export const DealProductCreateInputSchema: z.ZodType<Prisma.DealProductCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        productId: z.string(),
        quantity: z.number().int().optional(),
        unitPrice: z.number(),
        discount: z.number().optional().nullable(),
        total: z.number(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        deal: z.lazy(() => DealCreateNestedOneWithoutProductsInputSchema)
    })
    .strict()

export default DealProductCreateInputSchema
