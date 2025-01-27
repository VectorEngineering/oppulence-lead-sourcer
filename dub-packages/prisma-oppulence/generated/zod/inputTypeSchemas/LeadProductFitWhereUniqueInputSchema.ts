import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadProductFitAssessmentListRelationFilterSchema } from './LeadProductFitAssessmentListRelationFilterSchema';

export const LeadProductFitWhereUniqueInputSchema: z.ZodType<Prisma.LeadProductFitWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    leadId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    leadId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  leadId: z.string().optional(),
  AND: z.union([ z.lazy(() => LeadProductFitWhereInputSchema),z.lazy(() => LeadProductFitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadProductFitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadProductFitWhereInputSchema),z.lazy(() => LeadProductFitWhereInputSchema).array() ]).optional(),
  technicalFit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  businessFit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  culturalFit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  budgetFit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  overallFit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  strengthsWeaknesses: z.lazy(() => JsonFilterSchema).optional(),
  customizationNeeds: z.lazy(() => JsonFilterSchema).optional(),
  implementationComplexity: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requiredFeatures: z.lazy(() => JsonFilterSchema).optional(),
  optionalFeatures: z.lazy(() => JsonFilterSchema).optional(),
  dealBreakers: z.lazy(() => JsonFilterSchema).optional(),
  integrationComplexity: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  integrationRisks: z.lazy(() => JsonFilterSchema).optional(),
  integrationCosts: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  implementationTimeline: z.lazy(() => JsonFilterSchema).optional(),
  trainingNeeds: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
  assessments: z.lazy(() => LeadProductFitAssessmentListRelationFilterSchema).optional()
}).strict());

export default LeadProductFitWhereUniqueInputSchema;
