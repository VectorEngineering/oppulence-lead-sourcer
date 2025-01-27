import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_indexWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_indexWhereUniqueInputSchema'
import { jackson_indexCreateInputSchema } from '../inputTypeSchemas/jackson_indexCreateInputSchema'
import { jackson_indexUncheckedCreateInputSchema } from '../inputTypeSchemas/jackson_indexUncheckedCreateInputSchema'
import { jackson_indexUpdateInputSchema } from '../inputTypeSchemas/jackson_indexUpdateInputSchema'
import { jackson_indexUncheckedUpdateInputSchema } from '../inputTypeSchemas/jackson_indexUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_indexSelectSchema: z.ZodType<Prisma.jackson_indexSelect> = z
    .object({
        id: z.boolean().optional(),
        key: z.boolean().optional(),
        storeKey: z.boolean().optional()
    })
    .strict()

export const jackson_indexUpsertArgsSchema: z.ZodType<Prisma.jackson_indexUpsertArgs> = z
    .object({
        select: jackson_indexSelectSchema.optional(),
        where: jackson_indexWhereUniqueInputSchema,
        create: z.union([jackson_indexCreateInputSchema, jackson_indexUncheckedCreateInputSchema]),
        update: z.union([jackson_indexUpdateInputSchema, jackson_indexUncheckedUpdateInputSchema])
    })
    .strict()

export default jackson_indexUpsertArgsSchema
