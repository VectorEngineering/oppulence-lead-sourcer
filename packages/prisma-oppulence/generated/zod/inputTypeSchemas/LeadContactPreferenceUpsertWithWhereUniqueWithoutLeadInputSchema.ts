import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadContactPreferenceWhereUniqueInputSchema } from './LeadContactPreferenceWhereUniqueInputSchema';
import { LeadContactPreferenceUpdateWithoutLeadInputSchema } from './LeadContactPreferenceUpdateWithoutLeadInputSchema';
import { LeadContactPreferenceUncheckedUpdateWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedUpdateWithoutLeadInputSchema';
import { LeadContactPreferenceCreateWithoutLeadInputSchema } from './LeadContactPreferenceCreateWithoutLeadInputSchema';
import { LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema } from './LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema';

export const LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadContactPreferenceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadContactPreferenceUpdateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadContactPreferenceCreateWithoutLeadInputSchema),z.lazy(() => LeadContactPreferenceUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadContactPreferenceUpsertWithWhereUniqueWithoutLeadInputSchema;
