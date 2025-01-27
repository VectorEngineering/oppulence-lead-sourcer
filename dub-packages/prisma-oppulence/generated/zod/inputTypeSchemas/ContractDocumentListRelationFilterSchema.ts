import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema';

export const ContractDocumentListRelationFilterSchema: z.ZodType<Prisma.ContractDocumentListRelationFilter> = z.object({
  every: z.lazy(() => ContractDocumentWhereInputSchema).optional(),
  some: z.lazy(() => ContractDocumentWhereInputSchema).optional(),
  none: z.lazy(() => ContractDocumentWhereInputSchema).optional()
}).strict();

export default ContractDocumentListRelationFilterSchema;
