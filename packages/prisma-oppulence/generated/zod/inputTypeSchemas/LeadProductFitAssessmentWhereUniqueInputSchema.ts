import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitAssessmentWhereInputSchema } from './LeadProductFitAssessmentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadProductFitRelationFilterSchema } from './LeadProductFitRelationFilterSchema';
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema';

export const LeadProductFitAssessmentWhereUniqueInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => LeadProductFitAssessmentWhereInputSchema),z.lazy(() => LeadProductFitAssessmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadProductFitAssessmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadProductFitAssessmentWhereInputSchema),z.lazy(() => LeadProductFitAssessmentWhereInputSchema).array() ]).optional(),
  productFitId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  assessor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scores: z.lazy(() => JsonFilterSchema).optional(),
  notes: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  productFit: z.union([ z.lazy(() => LeadProductFitRelationFilterSchema),z.lazy(() => LeadProductFitWhereInputSchema) ]).optional(),
}).strict());

export default LeadProductFitAssessmentWhereUniqueInputSchema;
