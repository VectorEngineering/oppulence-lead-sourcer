import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractTemplateWhereInputSchema } from './ContractTemplateWhereInputSchema';

export const ContractTemplateListRelationFilterSchema: z.ZodType<Prisma.ContractTemplateListRelationFilter> = z.object({
  every: z.lazy(() => ContractTemplateWhereInputSchema).optional(),
  some: z.lazy(() => ContractTemplateWhereInputSchema).optional(),
  none: z.lazy(() => ContractTemplateWhereInputSchema).optional()
}).strict();

export default ContractTemplateListRelationFilterSchema;
