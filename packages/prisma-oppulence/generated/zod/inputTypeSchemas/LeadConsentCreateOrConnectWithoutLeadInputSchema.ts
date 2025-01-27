import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadConsentWhereUniqueInputSchema } from './LeadConsentWhereUniqueInputSchema';
import { LeadConsentCreateWithoutLeadInputSchema } from './LeadConsentCreateWithoutLeadInputSchema';
import { LeadConsentUncheckedCreateWithoutLeadInputSchema } from './LeadConsentUncheckedCreateWithoutLeadInputSchema';

export const LeadConsentCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadConsentCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadConsentCreateWithoutLeadInputSchema),z.lazy(() => LeadConsentUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadConsentCreateOrConnectWithoutLeadInputSchema;
