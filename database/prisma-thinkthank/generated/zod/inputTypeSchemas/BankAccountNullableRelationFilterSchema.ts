import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankAccountWhereInputSchema } from './BankAccountWhereInputSchema';

export const BankAccountNullableRelationFilterSchema: z.ZodType<Prisma.BankAccountNullableRelationFilter> = z.object({
  is: z.lazy(() => BankAccountWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BankAccountWhereInputSchema).optional().nullable()
}).strict();

export default BankAccountNullableRelationFilterSchema;
