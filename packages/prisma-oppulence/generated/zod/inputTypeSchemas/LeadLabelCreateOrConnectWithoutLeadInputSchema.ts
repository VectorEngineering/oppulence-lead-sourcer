import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadLabelWhereUniqueInputSchema } from './LeadLabelWhereUniqueInputSchema';
import { LeadLabelCreateWithoutLeadInputSchema } from './LeadLabelCreateWithoutLeadInputSchema';
import { LeadLabelUncheckedCreateWithoutLeadInputSchema } from './LeadLabelUncheckedCreateWithoutLeadInputSchema';

export const LeadLabelCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadLabelCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadLabelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadLabelCreateWithoutLeadInputSchema),z.lazy(() => LeadLabelUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadLabelCreateOrConnectWithoutLeadInputSchema;
