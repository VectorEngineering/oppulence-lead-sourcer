import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutWhereInputSchema } from './PayoutWhereInputSchema';

export const PayoutNullableRelationFilterSchema: z.ZodType<Prisma.PayoutNullableRelationFilter> = z.object({
  is: z.lazy(() => PayoutWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PayoutWhereInputSchema).optional().nullable()
}).strict();

export default PayoutNullableRelationFilterSchema;
