import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumFeedbackTypeFilterSchema } from './EnumFeedbackTypeFilterSchema';
import { FeedbackTypeSchema } from './FeedbackTypeSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumFeedbackStatusFilterSchema } from './EnumFeedbackStatusFilterSchema';
import { FeedbackStatusSchema } from './FeedbackStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LeadFeedbackScalarWhereInputSchema: z.ZodType<Prisma.LeadFeedbackScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadFeedbackScalarWhereInputSchema),z.lazy(() => LeadFeedbackScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadFeedbackScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadFeedbackScalarWhereInputSchema),z.lazy(() => LeadFeedbackScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumFeedbackTypeFilterSchema),z.lazy(() => FeedbackTypeSchema) ]).optional(),
  source: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sentiment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  score: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tags: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  requiresFollowUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  followUpAssignee: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  followUpStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  followUpNotes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumFeedbackStatusFilterSchema),z.lazy(() => FeedbackStatusSchema) ]).optional(),
  resolution: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  resolvedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  resolvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadFeedbackScalarWhereInputSchema;
