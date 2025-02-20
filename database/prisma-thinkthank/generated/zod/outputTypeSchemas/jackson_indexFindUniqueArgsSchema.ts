import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_indexWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_indexWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_indexSelectSchema: z.ZodType<Prisma.jackson_indexSelect> = z
    .object({
        id: z.boolean().optional(),
        key: z.boolean().optional(),
        storeKey: z.boolean().optional()
    })
    .strict()

export const jackson_indexFindUniqueArgsSchema: z.ZodType<Prisma.jackson_indexFindUniqueArgs> = z
    .object({
        select: jackson_indexSelectSchema.optional(),
        where: jackson_indexWhereUniqueInputSchema
    })
    .strict()

export default jackson_indexFindUniqueArgsSchema
