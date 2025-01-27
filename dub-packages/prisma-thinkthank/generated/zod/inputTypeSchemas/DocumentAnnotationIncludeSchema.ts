import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractDocumentArgsSchema } from "../outputTypeSchemas/ContractDocumentArgsSchema"

export const DocumentAnnotationIncludeSchema: z.ZodType<Prisma.DocumentAnnotationInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => ContractDocumentArgsSchema)]).optional(),
}).strict()

export default DocumentAnnotationIncludeSchema;
