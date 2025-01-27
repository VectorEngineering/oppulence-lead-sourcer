import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_indexCreateInputSchema } from '../inputTypeSchemas/jackson_indexCreateInputSchema'
import { jackson_indexUncheckedCreateInputSchema } from '../inputTypeSchemas/jackson_indexUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_indexSelectSchema: z.ZodType<Prisma.jackson_indexSelect> = z
    .object({
        id: z.boolean().optional(),
        key: z.boolean().optional(),
        storeKey: z.boolean().optional()
    })
    .strict()

export const jackson_indexCreateArgsSchema: z.ZodType<Prisma.jackson_indexCreateArgs> = z
    .object({
        select: jackson_indexSelectSchema.optional(),
        data: z.union([jackson_indexCreateInputSchema, jackson_indexUncheckedCreateInputSchema])
    })
    .strict()

export default jackson_indexCreateArgsSchema
