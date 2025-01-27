import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractDocumentSelectSchema } from '../inputTypeSchemas/ContractDocumentSelectSchema';
import { ContractDocumentIncludeSchema } from '../inputTypeSchemas/ContractDocumentIncludeSchema';

export const ContractDocumentArgsSchema: z.ZodType<Prisma.ContractDocumentDefaultArgs> = z.object({
  select: z.lazy(() => ContractDocumentSelectSchema).optional(),
  include: z.lazy(() => ContractDocumentIncludeSchema).optional(),
}).strict();

export default ContractDocumentArgsSchema;
