import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadDecisionMakerWhereUniqueInputSchema } from './LeadDecisionMakerWhereUniqueInputSchema';
import { LeadDecisionMakerCreateWithoutLeadInputSchema } from './LeadDecisionMakerCreateWithoutLeadInputSchema';
import { LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema';

export const LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadDecisionMakerCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadDecisionMakerCreateWithoutLeadInputSchema),z.lazy(() => LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema;
