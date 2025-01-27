import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentCommentWhereInputSchema } from '../inputTypeSchemas/DocumentCommentWhereInputSchema'
import { DocumentCommentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DocumentCommentOrderByWithAggregationInputSchema'
import { DocumentCommentScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentCommentScalarFieldEnumSchema'
import { DocumentCommentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DocumentCommentScalarWhereWithAggregatesInputSchema'

export const DocumentCommentGroupByArgsSchema: z.ZodType<Prisma.DocumentCommentGroupByArgs> = z
    .object({
        where: DocumentCommentWhereInputSchema.optional(),
        orderBy: z
            .union([DocumentCommentOrderByWithAggregationInputSchema.array(), DocumentCommentOrderByWithAggregationInputSchema])
            .optional(),
        by: DocumentCommentScalarFieldEnumSchema.array(),
        having: DocumentCommentScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DocumentCommentGroupByArgsSchema
