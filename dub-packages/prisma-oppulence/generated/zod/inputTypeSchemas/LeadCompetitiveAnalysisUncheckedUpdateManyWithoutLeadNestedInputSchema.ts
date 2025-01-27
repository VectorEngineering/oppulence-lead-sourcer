import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema } from './LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema } from './LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema';
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from './LeadCompetitiveAnalysisWhereUniqueInputSchema';
import { LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInputSchema';
import { LeadCompetitiveAnalysisScalarWhereInputSchema } from './LeadCompetitiveAnalysisScalarWhereInputSchema';

export const LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCompetitiveAnalysisCreateWithoutLeadInputSchema),z.lazy(() => LeadCompetitiveAnalysisCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadCompetitiveAnalysisUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadCompetitiveAnalysisCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadCompetitiveAnalysisUpsertWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema),z.lazy(() => LeadCompetitiveAnalysisWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInputSchema),z.lazy(() => LeadCompetitiveAnalysisUpdateWithWhereUniqueWithoutLeadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInputSchema),z.lazy(() => LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadCompetitiveAnalysisScalarWhereInputSchema),z.lazy(() => LeadCompetitiveAnalysisScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadNestedInputSchema;
