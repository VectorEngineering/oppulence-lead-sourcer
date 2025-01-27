import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_indexUpdateInputSchema } from '../inputTypeSchemas/jackson_indexUpdateInputSchema'
import { jackson_indexUncheckedUpdateInputSchema } from '../inputTypeSchemas/jackson_indexUncheckedUpdateInputSchema'
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

export const jackson_indexUpdateArgsSchema: z.ZodType<Prisma.jackson_indexUpdateArgs> = z
    .object({
        select: jackson_indexSelectSchema.optional(),
        data: z.union([jackson_indexUpdateInputSchema, jackson_indexUncheckedUpdateInputSchema]),
        where: jackson_indexWhereUniqueInputSchema
    })
    .strict()

export default jackson_indexUpdateArgsSchema
