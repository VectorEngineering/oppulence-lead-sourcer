import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_ttlWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_ttlSelectSchema: z.ZodType<Prisma.jackson_ttlSelect> = z
    .object({
        key: z.boolean().optional(),
        expiresAt: z.boolean().optional()
    })
    .strict()

export const jackson_ttlFindUniqueArgsSchema: z.ZodType<Prisma.jackson_ttlFindUniqueArgs> = z
    .object({
        select: jackson_ttlSelectSchema.optional(),
        where: jackson_ttlWhereUniqueInputSchema
    })
    .strict()

export default jackson_ttlFindUniqueArgsSchema
