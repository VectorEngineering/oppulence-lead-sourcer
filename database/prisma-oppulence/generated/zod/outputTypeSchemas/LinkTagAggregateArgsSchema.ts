import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkTagWhereInputSchema } from '../inputTypeSchemas/LinkTagWhereInputSchema'
import { LinkTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/LinkTagOrderByWithRelationInputSchema'
import { LinkTagWhereUniqueInputSchema } from '../inputTypeSchemas/LinkTagWhereUniqueInputSchema'

export const LinkTagAggregateArgsSchema: z.ZodType<Prisma.LinkTagAggregateArgs> = z
    .object({
        where: LinkTagWhereInputSchema.optional(),
        orderBy: z.union([LinkTagOrderByWithRelationInputSchema.array(), LinkTagOrderByWithRelationInputSchema]).optional(),
        cursor: LinkTagWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LinkTagAggregateArgsSchema
