import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentAnnotationIncludeSchema } from '../inputTypeSchemas/DocumentAnnotationIncludeSchema'
import { DocumentAnnotationCreateInputSchema } from '../inputTypeSchemas/DocumentAnnotationCreateInputSchema'
import { DocumentAnnotationUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentAnnotationUncheckedCreateInputSchema'
import { ContractDocumentArgsSchema } from "../outputTypeSchemas/ContractDocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentAnnotationSelectSchema: z.ZodType<Prisma.DocumentAnnotationSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  type: z.boolean().optional(),
  content: z.boolean().optional(),
  pageNumber: z.boolean().optional(),
  coordinates: z.boolean().optional(),
  color: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  document: z.union([z.boolean(),z.lazy(() => ContractDocumentArgsSchema)]).optional(),
}).strict()

export const DocumentAnnotationCreateArgsSchema: z.ZodType<Prisma.DocumentAnnotationCreateArgs> = z.object({
  select: DocumentAnnotationSelectSchema.optional(),
  include: DocumentAnnotationIncludeSchema.optional(),
  data: z.union([ DocumentAnnotationCreateInputSchema,DocumentAnnotationUncheckedCreateInputSchema ]),
}).strict() ;

export default DocumentAnnotationCreateArgsSchema;
