import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema } from './LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema';
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema';

export const LeadCompetitiveAnalysisCreateNestedOneWithoutAnalysisHistoryInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCreateNestedOneWithoutAnalysisHistoryInput> = z.object({
  create: z.union([ z.lazy(() => LeadCompetitiveAnalysisCreateWithoutAnalysisHistoryInputSchema),z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutAnalysisHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCompetitiveAnalysisCreateOrConnectWithoutAnalysisHistoryInputSchema).optional(),
  connect: z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisCreateNestedOneWithoutAnalysisHistoryInputSchema;
