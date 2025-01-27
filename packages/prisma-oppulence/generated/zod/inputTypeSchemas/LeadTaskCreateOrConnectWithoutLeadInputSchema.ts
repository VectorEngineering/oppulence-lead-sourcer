import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema';
import { LeadTaskCreateWithoutLeadInputSchema } from './LeadTaskCreateWithoutLeadInputSchema';
import { LeadTaskUncheckedCreateWithoutLeadInputSchema } from './LeadTaskUncheckedCreateWithoutLeadInputSchema';

export const LeadTaskCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadTaskCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadTaskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadTaskCreateWithoutLeadInputSchema),z.lazy(() => LeadTaskUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadTaskCreateOrConnectWithoutLeadInputSchema;
