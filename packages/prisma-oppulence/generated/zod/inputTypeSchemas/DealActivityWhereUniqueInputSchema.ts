import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityWhereInputSchema } from './DealActivityWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumDealActivityTypeFilterSchema } from './EnumDealActivityTypeFilterSchema';
import { DealActivityTypeSchema } from './DealActivityTypeSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DealRelationFilterSchema } from './DealRelationFilterSchema';
import { DealWhereInputSchema } from './DealWhereInputSchema';

export const DealActivityWhereUniqueInputSchema: z.ZodType<Prisma.DealActivityWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => DealActivityWhereInputSchema),z.lazy(() => DealActivityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DealActivityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DealActivityWhereInputSchema),z.lazy(() => DealActivityWhereInputSchema).array() ]).optional(),
  dealId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumDealActivityTypeFilterSchema),z.lazy(() => DealActivityTypeSchema) ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  outcome: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  scheduledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deal: z.union([ z.lazy(() => DealRelationFilterSchema),z.lazy(() => DealWhereInputSchema) ]).optional(),
}).strict());

export default DealActivityWhereUniqueInputSchema;
