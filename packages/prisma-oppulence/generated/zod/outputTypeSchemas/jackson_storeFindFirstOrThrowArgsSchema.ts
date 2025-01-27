import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_storeWhereInputSchema } from '../inputTypeSchemas/jackson_storeWhereInputSchema'
import { jackson_storeOrderByWithRelationInputSchema } from '../inputTypeSchemas/jackson_storeOrderByWithRelationInputSchema'
import { jackson_storeWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_storeWhereUniqueInputSchema'
import { Jackson_storeScalarFieldEnumSchema } from '../inputTypeSchemas/Jackson_storeScalarFieldEnumSchema'
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

export const jackson_storeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.jackson_storeFindFirstOrThrowArgs> = z
    .object({
        select: jackson_storeSelectSchema.optional(),
        where: jackson_storeWhereInputSchema.optional(),
        orderBy: z.union([jackson_storeOrderByWithRelationInputSchema.array(), jackson_storeOrderByWithRelationInputSchema]).optional(),
        cursor: jackson_storeWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([Jackson_storeScalarFieldEnumSchema, Jackson_storeScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default jackson_storeFindFirstOrThrowArgsSchema
