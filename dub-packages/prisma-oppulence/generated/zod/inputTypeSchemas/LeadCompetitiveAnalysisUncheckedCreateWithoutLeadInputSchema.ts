import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LeadCompetitiveHistoryUncheckedCreateNestedManyWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedCreateNestedManyWithoutAnalysisInputSchema';

export const LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  competitiveLandscape: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  ourStrengths: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  ourWeaknesses: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  competitors: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  competitorProducts: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  competitorPricing: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  winStrategy: z.string(),
  differentiators: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  responseStrategy: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  competitiveRisks: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  marketThreats: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  mitigationPlans: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  lastUpdated: z.coerce.date(),
  nextReviewDate: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  analysisHistory: z.lazy(() => LeadCompetitiveHistoryUncheckedCreateNestedManyWithoutAnalysisInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema;
