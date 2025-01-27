import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LeadCommentScalarWhereInputSchema: z.ZodType<Prisma.LeadCommentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadCommentScalarWhereInputSchema),z.lazy(() => LeadCommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCommentScalarWhereInputSchema),z.lazy(() => LeadCommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  visibility: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default LeadCommentScalarWhereInputSchema;
