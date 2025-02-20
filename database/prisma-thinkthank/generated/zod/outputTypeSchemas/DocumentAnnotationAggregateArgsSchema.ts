import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentAnnotationWhereInputSchema } from '../inputTypeSchemas/DocumentAnnotationWhereInputSchema'
import { DocumentAnnotationOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentAnnotationOrderByWithRelationInputSchema'
import { DocumentAnnotationWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentAnnotationWhereUniqueInputSchema'

export const DocumentAnnotationAggregateArgsSchema: z.ZodType<Prisma.DocumentAnnotationAggregateArgs> = z
    .object({
        where: DocumentAnnotationWhereInputSchema.optional(),
        orderBy: z
            .union([DocumentAnnotationOrderByWithRelationInputSchema.array(), DocumentAnnotationOrderByWithRelationInputSchema])
            .optional(),
        cursor: DocumentAnnotationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DocumentAnnotationAggregateArgsSchema
