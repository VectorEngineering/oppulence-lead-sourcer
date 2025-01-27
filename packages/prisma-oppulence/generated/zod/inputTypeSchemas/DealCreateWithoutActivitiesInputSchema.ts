import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealStatusSchema } from './DealStatusSchema';
import { DealPrioritySchema } from './DealPrioritySchema';
import { MarketingChannelSchema } from './MarketingChannelSchema';
import { UserCreateNestedOneWithoutDealInputSchema } from './UserCreateNestedOneWithoutDealInputSchema';
import { ProjectCreateNestedOneWithoutDealInputSchema } from './ProjectCreateNestedOneWithoutDealInputSchema';
import { PipelineCreateNestedOneWithoutDealsInputSchema } from './PipelineCreateNestedOneWithoutDealsInputSchema';
import { PipelineStageCreateNestedOneWithoutDealsInputSchema } from './PipelineStageCreateNestedOneWithoutDealsInputSchema';
import { LeadCreateNestedOneWithoutDealsInputSchema } from './LeadCreateNestedOneWithoutDealsInputSchema';
import { DealProductCreateNestedManyWithoutDealInputSchema } from './DealProductCreateNestedManyWithoutDealInputSchema';
import { DealCompetitorCreateNestedManyWithoutDealInputSchema } from './DealCompetitorCreateNestedManyWithoutDealInputSchema';
import { DocumentCreateNestedManyWithoutDealInputSchema } from './DocumentCreateNestedManyWithoutDealInputSchema';
import { DealTaskCreateNestedManyWithoutDealInputSchema } from './DealTaskCreateNestedManyWithoutDealInputSchema';
import { DealHistoryCreateNestedManyWithoutDealInputSchema } from './DealHistoryCreateNestedManyWithoutDealInputSchema';

export const DealCreateWithoutActivitiesInputSchema: z.ZodType<Prisma.DealCreateWithoutActivitiesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => DealStatusSchema).optional(),
  priority: z.lazy(() => DealPrioritySchema).optional(),
  value: z.number(),
  currency: z.string().optional(),
  probability: z.number().optional().nullable(),
  expectedRevenue: z.number().optional().nullable(),
  dealCategory: z.string().optional().nullable(),
  dealFocus: z.string().optional().nullable(),
  synergyPotential: z.number().optional().nullable(),
  synergyDescription: z.string().optional().nullable(),
  complianceCheck: z.boolean().optional().nullable(),
  complianceNotes: z.string().optional().nullable(),
  estimatedProfitMargin: z.number().optional().nullable(),
  discountReason: z.string().optional().nullable(),
  closingStrategy: z.string().optional().nullable(),
  marketingChannel: z.lazy(() => MarketingChannelSchema).optional().nullable(),
  leadRating: z.string().optional().nullable(),
  startDate: z.coerce.date().optional().nullable(),
  closeDate: z.coerce.date().optional().nullable(),
  actualCloseDate: z.coerce.date().optional().nullable(),
  progress: z.number().int().optional(),
  reason: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  archivedAt: z.coerce.date().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  assignedTo: z.lazy(() => UserCreateNestedOneWithoutDealInputSchema).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutDealInputSchema),
  pipeline: z.lazy(() => PipelineCreateNestedOneWithoutDealsInputSchema),
  stage: z.lazy(() => PipelineStageCreateNestedOneWithoutDealsInputSchema),
  lead: z.lazy(() => LeadCreateNestedOneWithoutDealsInputSchema).optional(),
  products: z.lazy(() => DealProductCreateNestedManyWithoutDealInputSchema).optional(),
  competitors: z.lazy(() => DealCompetitorCreateNestedManyWithoutDealInputSchema).optional(),
  attachments: z.lazy(() => DocumentCreateNestedManyWithoutDealInputSchema).optional(),
  tasks: z.lazy(() => DealTaskCreateNestedManyWithoutDealInputSchema).optional(),
  history: z.lazy(() => DealHistoryCreateNestedManyWithoutDealInputSchema).optional()
}).strict();

export default DealCreateWithoutActivitiesInputSchema;
