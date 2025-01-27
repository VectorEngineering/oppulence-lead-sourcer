import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCommentIncludeSchema } from '../inputTypeSchemas/DocumentCommentIncludeSchema'
import { DocumentCommentWhereInputSchema } from '../inputTypeSchemas/DocumentCommentWhereInputSchema'
import { DocumentCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentCommentOrderByWithRelationInputSchema'
import { DocumentCommentWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentCommentWhereUniqueInputSchema'
import { DocumentCommentScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentCommentScalarFieldEnumSchema'
import { ContractDocumentArgsSchema } from "../outputTypeSchemas/ContractDocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentCommentSelectSchema: z.ZodType<Prisma.DocumentCommentSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  content: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  parentCommentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => ContractDocumentArgsSchema)]).optional(),
}).strict()

export const DocumentCommentFindManyArgsSchema: z.ZodType<Prisma.DocumentCommentFindManyArgs> = z.object({
  select: DocumentCommentSelectSchema.optional(),
  include: DocumentCommentIncludeSchema.optional(),
  where: DocumentCommentWhereInputSchema.optional(),
  orderBy: z.union([ DocumentCommentOrderByWithRelationInputSchema.array(),DocumentCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocumentCommentScalarFieldEnumSchema,DocumentCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DocumentCommentFindManyArgsSchema;
