import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialProfileWhereUniqueInputSchema } from './LeadSocialProfileWhereUniqueInputSchema';
import { LeadSocialProfileCreateWithoutLeadInputSchema } from './LeadSocialProfileCreateWithoutLeadInputSchema';
import { LeadSocialProfileUncheckedCreateWithoutLeadInputSchema } from './LeadSocialProfileUncheckedCreateWithoutLeadInputSchema';

export const LeadSocialProfileCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadSocialProfileCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadSocialProfileCreateWithoutLeadInputSchema),z.lazy(() => LeadSocialProfileUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadSocialProfileCreateOrConnectWithoutLeadInputSchema;
