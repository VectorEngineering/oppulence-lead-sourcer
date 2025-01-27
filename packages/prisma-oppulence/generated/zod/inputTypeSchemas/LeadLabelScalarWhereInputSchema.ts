import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LeadLabelScalarWhereInputSchema: z.ZodType<Prisma.LeadLabelScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadLabelScalarWhereInputSchema),z.lazy(() => LeadLabelScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadLabelScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadLabelScalarWhereInputSchema),z.lazy(() => LeadLabelScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadLabelScalarWhereInputSchema;
