import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema';

export const ContractDocumentRelationFilterSchema: z.ZodType<Prisma.ContractDocumentRelationFilter> = z.object({
  is: z.lazy(() => ContractDocumentWhereInputSchema).optional(),
  isNot: z.lazy(() => ContractDocumentWhereInputSchema).optional()
}).strict();

export default ContractDocumentRelationFilterSchema;
