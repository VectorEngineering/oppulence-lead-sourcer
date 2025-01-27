import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_storeWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_storeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_storeSelectSchema: z.ZodType<Prisma.jackson_storeSelect> = z
    .object({
        key: z.boolean().optional(),
        value: z.boolean().optional(),
        iv: z.boolean().optional(),
        tag: z.boolean().optional(),
        namespace: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        modifiedAt: z.boolean().optional()
    })
    .strict()

export const jackson_storeFindUniqueArgsSchema: z.ZodType<Prisma.jackson_storeFindUniqueArgs> = z
    .object({
        select: jackson_storeSelectSchema.optional(),
        where: jackson_storeWhereUniqueInputSchema
    })
    .strict()

export default jackson_storeFindUniqueArgsSchema
