import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlWhereInputSchema } from '../inputTypeSchemas/jackson_ttlWhereInputSchema'
import { jackson_ttlOrderByWithRelationInputSchema } from '../inputTypeSchemas/jackson_ttlOrderByWithRelationInputSchema'
import { jackson_ttlWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_ttlWhereUniqueInputSchema'
import { Jackson_ttlScalarFieldEnumSchema } from '../inputTypeSchemas/Jackson_ttlScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_ttlSelectSchema: z.ZodType<Prisma.jackson_ttlSelect> = z
    .object({
        key: z.boolean().optional(),
        expiresAt: z.boolean().optional()
    })
    .strict()

export const jackson_ttlFindFirstArgsSchema: z.ZodType<Prisma.jackson_ttlFindFirstArgs> = z
    .object({
        select: jackson_ttlSelectSchema.optional(),
        where: jackson_ttlWhereInputSchema.optional(),
        orderBy: z.union([jackson_ttlOrderByWithRelationInputSchema.array(), jackson_ttlOrderByWithRelationInputSchema]).optional(),
        cursor: jackson_ttlWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([Jackson_ttlScalarFieldEnumSchema, Jackson_ttlScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default jackson_ttlFindFirstArgsSchema
