import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxWhereInputSchema } from '../inputTypeSchemas/InboxWhereInputSchema'
import { InboxOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxOrderByWithRelationInputSchema'
import { InboxWhereUniqueInputSchema } from '../inputTypeSchemas/InboxWhereUniqueInputSchema'

export const InboxAggregateArgsSchema: z.ZodType<Prisma.InboxAggregateArgs> = z
    .object({
        where: InboxWhereInputSchema.optional(),
        orderBy: z.union([InboxOrderByWithRelationInputSchema.array(), InboxOrderByWithRelationInputSchema]).optional(),
        cursor: InboxWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InboxAggregateArgsSchema
