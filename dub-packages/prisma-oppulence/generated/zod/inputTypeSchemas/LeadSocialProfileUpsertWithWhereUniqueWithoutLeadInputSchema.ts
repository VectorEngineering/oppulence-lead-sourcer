import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialProfileWhereUniqueInputSchema } from './LeadSocialProfileWhereUniqueInputSchema';
import { LeadSocialProfileUpdateWithoutLeadInputSchema } from './LeadSocialProfileUpdateWithoutLeadInputSchema';
import { LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema } from './LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema';
import { LeadSocialProfileCreateWithoutLeadInputSchema } from './LeadSocialProfileCreateWithoutLeadInputSchema';
import { LeadSocialProfileUncheckedCreateWithoutLeadInputSchema } from './LeadSocialProfileUncheckedCreateWithoutLeadInputSchema';

export const LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadSocialProfileUpdateWithoutLeadInputSchema),z.lazy(() => LeadSocialProfileUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadSocialProfileCreateWithoutLeadInputSchema),z.lazy(() => LeadSocialProfileUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadSocialProfileUpsertWithWhereUniqueWithoutLeadInputSchema;
