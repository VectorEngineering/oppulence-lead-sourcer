import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadConsentWhereUniqueInputSchema } from './LeadConsentWhereUniqueInputSchema';
import { LeadConsentUpdateWithoutLeadInputSchema } from './LeadConsentUpdateWithoutLeadInputSchema';
import { LeadConsentUncheckedUpdateWithoutLeadInputSchema } from './LeadConsentUncheckedUpdateWithoutLeadInputSchema';
import { LeadConsentCreateWithoutLeadInputSchema } from './LeadConsentCreateWithoutLeadInputSchema';
import { LeadConsentUncheckedCreateWithoutLeadInputSchema } from './LeadConsentUncheckedCreateWithoutLeadInputSchema';

export const LeadConsentUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadConsentUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadConsentUpdateWithoutLeadInputSchema),z.lazy(() => LeadConsentUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadConsentCreateWithoutLeadInputSchema),z.lazy(() => LeadConsentUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadConsentUpsertWithWhereUniqueWithoutLeadInputSchema;
