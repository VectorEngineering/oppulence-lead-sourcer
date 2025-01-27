import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentAnnotationWhereInputSchema } from '../inputTypeSchemas/DocumentAnnotationWhereInputSchema'
import { DocumentAnnotationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DocumentAnnotationOrderByWithAggregationInputSchema'
import { DocumentAnnotationScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentAnnotationScalarFieldEnumSchema'
import { DocumentAnnotationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DocumentAnnotationScalarWhereWithAggregatesInputSchema'

export const DocumentAnnotationGroupByArgsSchema: z.ZodType<Prisma.DocumentAnnotationGroupByArgs> = z.object({
  where: DocumentAnnotationWhereInputSchema.optional(),
  orderBy: z.union([ DocumentAnnotationOrderByWithAggregationInputSchema.array(),DocumentAnnotationOrderByWithAggregationInputSchema ]).optional(),
  by: DocumentAnnotationScalarFieldEnumSchema.array(),
  having: DocumentAnnotationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DocumentAnnotationGroupByArgsSchema;
