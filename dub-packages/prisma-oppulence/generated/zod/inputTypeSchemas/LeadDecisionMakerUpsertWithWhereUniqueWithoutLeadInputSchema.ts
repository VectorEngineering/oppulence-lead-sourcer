import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadDecisionMakerWhereUniqueInputSchema } from './LeadDecisionMakerWhereUniqueInputSchema';
import { LeadDecisionMakerUpdateWithoutLeadInputSchema } from './LeadDecisionMakerUpdateWithoutLeadInputSchema';
import { LeadDecisionMakerUncheckedUpdateWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedUpdateWithoutLeadInputSchema';
import { LeadDecisionMakerCreateWithoutLeadInputSchema } from './LeadDecisionMakerCreateWithoutLeadInputSchema';
import { LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema';

export const LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadDecisionMakerUpdateWithoutLeadInputSchema),z.lazy(() => LeadDecisionMakerUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadDecisionMakerCreateWithoutLeadInputSchema),z.lazy(() => LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInputSchema;
