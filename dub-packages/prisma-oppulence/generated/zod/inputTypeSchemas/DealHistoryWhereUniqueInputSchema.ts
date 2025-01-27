import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealHistoryWhereInputSchema } from './DealHistoryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DealRelationFilterSchema } from './DealRelationFilterSchema';
import { DealWhereInputSchema } from './DealWhereInputSchema';

export const DealHistoryWhereUniqueInputSchema: z.ZodType<Prisma.DealHistoryWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => DealHistoryWhereInputSchema),z.lazy(() => DealHistoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DealHistoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DealHistoryWhereInputSchema),z.lazy(() => DealHistoryWhereInputSchema).array() ]).optional(),
  dealId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  oldValue: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  newValue: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deal: z.union([ z.lazy(() => DealRelationFilterSchema),z.lazy(() => DealWhereInputSchema) ]).optional(),
}).strict());

export default DealHistoryWhereUniqueInputSchema;
