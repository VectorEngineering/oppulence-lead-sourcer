import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadContactPreferenceWhereUniqueInputSchema } from './LeadContactPreferenceWhereUniqueInputSchema';
import { LeadContactPreferenceCreateWithoutLeadInputSchema } from './LeadContactPreferenceCreateWithoutLeadInputSchema';
import { LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema';

export const LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadContactPreferenceCreateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadContactPreferenceCreateOrConnectWithoutLeadInputSchema;
