import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LeadCompetitiveHistoryScalarWhereInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema),z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema),z.lazy(() => LeadCompetitiveHistoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  analysisId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  changes: z.lazy(() => JsonFilterSchema).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadCompetitiveHistoryScalarWhereInputSchema;
