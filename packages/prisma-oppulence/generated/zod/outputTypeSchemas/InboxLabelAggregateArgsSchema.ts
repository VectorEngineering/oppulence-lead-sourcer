import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxLabelWhereInputSchema } from '../inputTypeSchemas/InboxLabelWhereInputSchema'
import { InboxLabelOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxLabelOrderByWithRelationInputSchema'
import { InboxLabelWhereUniqueInputSchema } from '../inputTypeSchemas/InboxLabelWhereUniqueInputSchema'

export const InboxLabelAggregateArgsSchema: z.ZodType<Prisma.InboxLabelAggregateArgs> = z
    .object({
        where: InboxLabelWhereInputSchema.optional(),
        orderBy: z.union([InboxLabelOrderByWithRelationInputSchema.array(), InboxLabelOrderByWithRelationInputSchema]).optional(),
        cursor: InboxLabelWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InboxLabelAggregateArgsSchema
