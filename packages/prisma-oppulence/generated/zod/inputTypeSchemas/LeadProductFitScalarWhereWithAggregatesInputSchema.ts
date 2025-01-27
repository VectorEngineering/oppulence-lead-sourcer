import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadProductFitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadProductFitScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadProductFitScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadProductFitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadProductFitScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadProductFitScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadProductFitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  technicalFit: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  businessFit: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  culturalFit: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  budgetFit: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  overallFit: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  strengthsWeaknesses: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  customizationNeeds: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  implementationComplexity: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requiredFeatures: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  optionalFeatures: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  dealBreakers: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  integrationComplexity: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  integrationRisks: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  integrationCosts: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  implementationTimeline: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  trainingNeeds: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadProductFitScalarWhereWithAggregatesInputSchema;
