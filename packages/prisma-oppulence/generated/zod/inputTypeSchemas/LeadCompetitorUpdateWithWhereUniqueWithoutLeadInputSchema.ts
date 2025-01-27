import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitorWhereUniqueInputSchema } from './LeadCompetitorWhereUniqueInputSchema';
import { LeadCompetitorUpdateWithoutLeadInputSchema } from './LeadCompetitorUpdateWithoutLeadInputSchema';
import { LeadCompetitorUncheckedUpdateWithoutLeadInputSchema } from './LeadCompetitorUncheckedUpdateWithoutLeadInputSchema';

export const LeadCompetitorUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitorUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCompetitorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadCompetitorUpdateWithoutLeadInputSchema),z.lazy(() => LeadCompetitorUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCompetitorUpdateWithWhereUniqueWithoutLeadInputSchema;
