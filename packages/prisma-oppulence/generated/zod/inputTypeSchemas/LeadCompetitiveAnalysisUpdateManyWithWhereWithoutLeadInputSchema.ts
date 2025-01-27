import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisScalarWhereInputSchema } from './LeadCompetitiveAnalysisScalarWhereInputSchema';
import { LeadCompetitiveAnalysisUpdateManyMutationInputSchema } from './LeadCompetitiveAnalysisUpdateManyMutationInputSchema';
import { LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadInputSchema } from './LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCompetitiveAnalysisScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadCompetitiveAnalysisUpdateManyMutationInputSchema),z.lazy(() => LeadCompetitiveAnalysisUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadCompetitiveAnalysisUpdateManyWithWhereWithoutLeadInputSchema;
