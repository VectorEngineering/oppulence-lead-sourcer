import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisWhereInputSchema } from './LeadCompetitiveAnalysisWhereInputSchema';

export const LeadCompetitiveAnalysisUpsertWithoutAnalysisHistoryInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpsertWithoutAnalysisHistoryInput> = z.object({
  update: z.union([ z.lazy(() => LeadCompetitiveAnalysisUpdateWithoutAnalysisHistoryInputSchema),z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateWithoutAnalysisHistoryInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema),z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema) ]),
  where: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisUpsertWithoutAnalysisHistoryInputSchema;
