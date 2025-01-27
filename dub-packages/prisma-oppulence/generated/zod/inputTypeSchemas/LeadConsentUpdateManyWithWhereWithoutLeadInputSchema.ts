import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadConsentScalarWhereInputSchema } from './LeadConsentScalarWhereInputSchema';
import { LeadConsentUpdateManyMutationInputSchema } from './LeadConsentUpdateManyMutationInputSchema';
import { LeadConsentUncheckedUpdateManyWithoutLeadInputSchema } from './LeadConsentUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadConsentUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadConsentUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadConsentUpdateManyMutationInputSchema),z.lazy(() => LeadConsentUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadConsentUpdateManyWithWhereWithoutLeadInputSchema;
