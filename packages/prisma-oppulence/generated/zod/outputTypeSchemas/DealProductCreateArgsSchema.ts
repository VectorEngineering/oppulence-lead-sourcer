import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealProductIncludeSchema } from '../inputTypeSchemas/DealProductIncludeSchema'
import { DealProductCreateInputSchema } from '../inputTypeSchemas/DealProductCreateInputSchema'
import { DealProductUncheckedCreateInputSchema } from '../inputTypeSchemas/DealProductUncheckedCreateInputSchema'
import { DealArgsSchema } from './DealArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealProductSelectSchema: z.ZodType<Prisma.DealProductSelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        productId: z.boolean().optional(),
        quantity: z.boolean().optional(),
        unitPrice: z.boolean().optional(),
        discount: z.boolean().optional(),
        total: z.boolean().optional(),
        description: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export const DealProductCreateArgsSchema: z.ZodType<Prisma.DealProductCreateArgs> = z
    .object({
        select: DealProductSelectSchema.optional(),
        include: DealProductIncludeSchema.optional(),
        data: z.union([DealProductCreateInputSchema, DealProductUncheckedCreateInputSchema])
    })
    .strict()

export default DealProductCreateArgsSchema
