import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlCreateInputSchema } from '../inputTypeSchemas/jackson_ttlCreateInputSchema'
import { jackson_ttlUncheckedCreateInputSchema } from '../inputTypeSchemas/jackson_ttlUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_ttlSelectSchema: z.ZodType<Prisma.jackson_ttlSelect> = z
    .object({
        key: z.boolean().optional(),
        expiresAt: z.boolean().optional()
    })
    .strict()

export const jackson_ttlCreateArgsSchema: z.ZodType<Prisma.jackson_ttlCreateArgs> = z
    .object({
        select: jackson_ttlSelectSchema.optional(),
        data: z.union([jackson_ttlCreateInputSchema, jackson_ttlUncheckedCreateInputSchema])
    })
    .strict()

export default jackson_ttlCreateArgsSchema
