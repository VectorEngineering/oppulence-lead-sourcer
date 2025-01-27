import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { EnumLeadSourceFilterSchema } from './EnumLeadSourceFilterSchema';
import { LeadSourceSchema } from './LeadSourceSchema';
import { EnumLeadStageFilterSchema } from './EnumLeadStageFilterSchema';
import { LeadStageSchema } from './LeadStageSchema';
import { EnumLeadVerificationStatusFilterSchema } from './EnumLeadVerificationStatusFilterSchema';
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema';
import { EnumLeadPriorityFilterSchema } from './EnumLeadPriorityFilterSchema';
import { LeadPrioritySchema } from './LeadPrioritySchema';
import { EnumLeadCategoryTagNullableFilterSchema } from './EnumLeadCategoryTagNullableFilterSchema';
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const LeadScalarWhereInputSchema: z.ZodType<Prisma.LeadScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadScalarWhereInputSchema),z.lazy(() => LeadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadScalarWhereInputSchema),z.lazy(() => LeadScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  internalNotes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reference: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  probability: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  weightedAmount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  actualAmount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  leadSource: z.union([ z.lazy(() => EnumLeadSourceFilterSchema),z.lazy(() => LeadSourceSchema) ]).optional(),
  stage: z.union([ z.lazy(() => EnumLeadStageFilterSchema),z.lazy(() => LeadStageSchema) ]).optional(),
  verificationStatus: z.union([ z.lazy(() => EnumLeadVerificationStatusFilterSchema),z.lazy(() => LeadVerificationStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => EnumLeadPriorityFilterSchema),z.lazy(() => LeadPrioritySchema) ]).optional(),
  categoryTag: z.union([ z.lazy(() => EnumLeadCategoryTagNullableFilterSchema),z.lazy(() => LeadCategoryTagSchema) ]).optional().nullable(),
  closeDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextFollowUp: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastContactDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  contactName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  contactEmail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  contactPhone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  contactTitle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  company: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  industry: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pipelineStage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  salesRep: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  territory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  winReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lossReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  archivedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  convertedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  qualifiedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  closedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastActivity: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nextAction: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  followUpStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  engagementScore: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  assignedId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dataConsent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  dataRetention: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  externalId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  syncStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastSyncedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default LeadScalarWhereInputSchema;
