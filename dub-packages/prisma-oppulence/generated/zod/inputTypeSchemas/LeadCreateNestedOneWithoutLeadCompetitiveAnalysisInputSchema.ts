import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadCreateWithoutLeadCompetitiveAnalysisInputSchema';
import { LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema';
import { LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema } from './LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadCompetitiveAnalysisInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadCompetitiveAnalysisInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadCompetitiveAnalysisInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadCompetitiveAnalysisInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadCompetitiveAnalysisInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadCompetitiveAnalysisInputSchema;
