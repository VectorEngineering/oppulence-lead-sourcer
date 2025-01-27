import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentCommentWhereInputSchema } from '../inputTypeSchemas/DocumentCommentWhereInputSchema'
import { DocumentCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentCommentOrderByWithRelationInputSchema'
import { DocumentCommentWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentCommentWhereUniqueInputSchema'

export const DocumentCommentAggregateArgsSchema: z.ZodType<Prisma.DocumentCommentAggregateArgs> = z
    .object({
        where: DocumentCommentWhereInputSchema.optional(),
        orderBy: z.union([DocumentCommentOrderByWithRelationInputSchema.array(), DocumentCommentOrderByWithRelationInputSchema]).optional(),
        cursor: DocumentCommentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DocumentCommentAggregateArgsSchema
