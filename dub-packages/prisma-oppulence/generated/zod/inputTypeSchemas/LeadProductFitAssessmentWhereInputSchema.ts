import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadProductFitRelationFilterSchema } from './LeadProductFitRelationFilterSchema';
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema';

export const LeadProductFitAssessmentWhereInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadProductFitAssessmentWhereInputSchema),z.lazy(() => LeadProductFitAssessmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadProductFitAssessmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadProductFitAssessmentWhereInputSchema),z.lazy(() => LeadProductFitAssessmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productFitId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assessor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scores: z.lazy(() => JsonFilterSchema).optional(),
  notes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  productFit: z.union([ z.lazy(() => LeadProductFitRelationFilterSchema),z.lazy(() => LeadProductFitWhereInputSchema) ]).optional(),
}).strict();

export default LeadProductFitAssessmentWhereInputSchema;
