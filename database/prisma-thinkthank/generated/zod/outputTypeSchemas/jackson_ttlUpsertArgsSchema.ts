import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_ttlWhereUniqueInputSchema'
import { jackson_ttlCreateInputSchema } from '../inputTypeSchemas/jackson_ttlCreateInputSchema'
import { jackson_ttlUncheckedCreateInputSchema } from '../inputTypeSchemas/jackson_ttlUncheckedCreateInputSchema'
import { jackson_ttlUpdateInputSchema } from '../inputTypeSchemas/jackson_ttlUpdateInputSchema'
import { jackson_ttlUncheckedUpdateInputSchema } from '../inputTypeSchemas/jackson_ttlUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_ttlSelectSchema: z.ZodType<Prisma.jackson_ttlSelect> = z
    .object({
        key: z.boolean().optional(),
        expiresAt: z.boolean().optional()
    })
    .strict()

export const jackson_ttlUpsertArgsSchema: z.ZodType<Prisma.jackson_ttlUpsertArgs> = z
    .object({
        select: jackson_ttlSelectSchema.optional(),
        where: jackson_ttlWhereUniqueInputSchema,
        create: z.union([jackson_ttlCreateInputSchema, jackson_ttlUncheckedCreateInputSchema]),
        update: z.union([jackson_ttlUpdateInputSchema, jackson_ttlUncheckedUpdateInputSchema])
    })
    .strict()

export default jackson_ttlUpsertArgsSchema
