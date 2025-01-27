import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealProductWhereInputSchema } from './DealProductWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DealRelationFilterSchema } from './DealRelationFilterSchema';
import { DealWhereInputSchema } from './DealWhereInputSchema';

export const DealProductWhereUniqueInputSchema: z.ZodType<Prisma.DealProductWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => DealProductWhereInputSchema),z.lazy(() => DealProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DealProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DealProductWhereInputSchema),z.lazy(() => DealProductWhereInputSchema).array() ]).optional(),
  dealId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  total: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deal: z.union([ z.lazy(() => DealRelationFilterSchema),z.lazy(() => DealWhereInputSchema) ]).optional(),
}).strict());

export default DealProductWhereUniqueInputSchema;
