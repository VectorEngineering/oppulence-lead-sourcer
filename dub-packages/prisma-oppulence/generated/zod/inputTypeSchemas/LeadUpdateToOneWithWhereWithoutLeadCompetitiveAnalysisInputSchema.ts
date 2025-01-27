import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema';
import { LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema } from './LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema';

export const LeadUpdateToOneWithWhereWithoutLeadCompetitiveAnalysisInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadCompetitiveAnalysisInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutLeadCompetitiveAnalysisInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadCompetitiveAnalysisInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutLeadCompetitiveAnalysisInputSchema;
