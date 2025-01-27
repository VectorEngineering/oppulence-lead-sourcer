import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionHistoryIncludeSchema } from '../inputTypeSchemas/TransactionHistoryIncludeSchema'
import { TransactionHistoryWhereInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereInputSchema'
import { TransactionHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionHistoryOrderByWithRelationInputSchema'
import { TransactionHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereUniqueInputSchema'
import { TransactionHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionHistoryScalarFieldEnumSchema'
import { TransactionArgsSchema } from './TransactionArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionHistorySelectSchema: z.ZodType<Prisma.TransactionHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        transactionId: z.boolean().optional(),
        action: z.boolean().optional(),
        description: z.boolean().optional(),
        changes: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional()
    })
    .strict()

export const TransactionHistoryFindManyArgsSchema: z.ZodType<Prisma.TransactionHistoryFindManyArgs> = z
    .object({
        select: TransactionHistorySelectSchema.optional(),
        include: TransactionHistoryIncludeSchema.optional(),
        where: TransactionHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([TransactionHistoryOrderByWithRelationInputSchema.array(), TransactionHistoryOrderByWithRelationInputSchema])
            .optional(),
        cursor: TransactionHistoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([TransactionHistoryScalarFieldEnumSchema, TransactionHistoryScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default TransactionHistoryFindManyArgsSchema
