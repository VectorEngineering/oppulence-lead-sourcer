import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxShareWhereInputSchema } from '../inputTypeSchemas/InboxShareWhereInputSchema'
import { InboxShareOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxShareOrderByWithRelationInputSchema'
import { InboxShareWhereUniqueInputSchema } from '../inputTypeSchemas/InboxShareWhereUniqueInputSchema'

export const InboxShareAggregateArgsSchema: z.ZodType<Prisma.InboxShareAggregateArgs> = z
    .object({
        where: InboxShareWhereInputSchema.optional(),
        orderBy: z.union([InboxShareOrderByWithRelationInputSchema.array(), InboxShareOrderByWithRelationInputSchema]).optional(),
        cursor: InboxShareWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InboxShareAggregateArgsSchema
