import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractDocumentArgsSchema } from "../outputTypeSchemas/ContractDocumentArgsSchema"

export const DocumentCommentIncludeSchema: z.ZodType<Prisma.DocumentCommentInclude> = z.object({
  document: z.union([z.boolean(),z.lazy(() => ContractDocumentArgsSchema)]).optional(),
}).strict()

export default DocumentCommentIncludeSchema;
