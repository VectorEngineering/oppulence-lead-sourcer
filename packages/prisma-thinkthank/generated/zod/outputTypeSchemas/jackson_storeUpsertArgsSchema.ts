import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_storeWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_storeWhereUniqueInputSchema'
import { jackson_storeCreateInputSchema } from '../inputTypeSchemas/jackson_storeCreateInputSchema'
import { jackson_storeUncheckedCreateInputSchema } from '../inputTypeSchemas/jackson_storeUncheckedCreateInputSchema'
import { jackson_storeUpdateInputSchema } from '../inputTypeSchemas/jackson_storeUpdateInputSchema'
import { jackson_storeUncheckedUpdateInputSchema } from '../inputTypeSchemas/jackson_storeUncheckedUpdateInputSchema'
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

export const jackson_storeUpsertArgsSchema: z.ZodType<Prisma.jackson_storeUpsertArgs> = z
    .object({
        select: jackson_storeSelectSchema.optional(),
        where: jackson_storeWhereUniqueInputSchema,
        create: z.union([jackson_storeCreateInputSchema, jackson_storeUncheckedCreateInputSchema]),
        update: z.union([jackson_storeUpdateInputSchema, jackson_storeUncheckedUpdateInputSchema])
    })
    .strict()

export default jackson_storeUpsertArgsSchema
