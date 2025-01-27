import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema } from './LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema';
import { LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema } from './LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema';
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from './LeadCompetitiveHistoryWhereUniqueInputSchema';

export const LeadCompetitiveHistoryUncheckedCreateNestedManyWithoutAnalysisInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryUncheckedCreateNestedManyWithoutAnalysisInput> = z.object({
  create: z.union([ z.lazy(() => LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryCreateWithoutAnalysisInputSchema).array(),z.lazy(() => LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryUncheckedCreateWithoutAnalysisInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema),z.lazy(() => LeadCompetitiveHistoryCreateOrConnectWithoutAnalysisInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveHistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadCompetitiveHistoryUncheckedCreateNestedManyWithoutAnalysisInputSchema;
