import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';

export const ContractNullableRelationFilterSchema: z.ZodType<Prisma.ContractNullableRelationFilter> = z.object({
  is: z.lazy(() => ContractWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ContractWhereInputSchema).optional().nullable()
}).strict();

export default ContractNullableRelationFilterSchema;
