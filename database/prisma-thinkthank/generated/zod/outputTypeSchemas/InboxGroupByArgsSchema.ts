import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxWhereInputSchema } from '../inputTypeSchemas/InboxWhereInputSchema'
import { InboxOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InboxOrderByWithAggregationInputSchema'
import { InboxScalarFieldEnumSchema } from '../inputTypeSchemas/InboxScalarFieldEnumSchema'
import { InboxScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InboxScalarWhereWithAggregatesInputSchema'

export const InboxGroupByArgsSchema: z.ZodType<Prisma.InboxGroupByArgs> = z
    .object({
        where: InboxWhereInputSchema.optional(),
        orderBy: z.union([InboxOrderByWithAggregationInputSchema.array(), InboxOrderByWithAggregationInputSchema]).optional(),
        by: InboxScalarFieldEnumSchema.array(),
        having: InboxScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InboxGroupByArgsSchema
