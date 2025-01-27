import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitorWhereUniqueInputSchema } from './LeadCompetitorWhereUniqueInputSchema';
import { LeadCompetitorCreateWithoutLeadInputSchema } from './LeadCompetitorCreateWithoutLeadInputSchema';
import { LeadCompetitorUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitorUncheckedCreateWithoutLeadInputSchema';

export const LeadCompetitorCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitorCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCompetitorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCompetitorCreateWithoutLeadInputSchema),z.lazy(() => LeadCompetitorUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCompetitorCreateOrConnectWithoutLeadInputSchema;
