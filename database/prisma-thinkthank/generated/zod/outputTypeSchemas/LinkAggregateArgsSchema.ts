import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkWhereInputSchema } from '../inputTypeSchemas/LinkWhereInputSchema'
import { LinkOrderByWithRelationInputSchema } from '../inputTypeSchemas/LinkOrderByWithRelationInputSchema'
import { LinkWhereUniqueInputSchema } from '../inputTypeSchemas/LinkWhereUniqueInputSchema'

export const LinkAggregateArgsSchema: z.ZodType<Prisma.LinkAggregateArgs> = z
    .object({
        where: LinkWhereInputSchema.optional(),
        orderBy: z.union([LinkOrderByWithRelationInputSchema.array(), LinkOrderByWithRelationInputSchema]).optional(),
        cursor: LinkWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LinkAggregateArgsSchema
