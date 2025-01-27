import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadHistoryWhereUniqueInputSchema } from './LeadHistoryWhereUniqueInputSchema';
import { LeadHistoryCreateWithoutLeadInputSchema } from './LeadHistoryCreateWithoutLeadInputSchema';
import { LeadHistoryUncheckedCreateWithoutLeadInputSchema } from './LeadHistoryUncheckedCreateWithoutLeadInputSchema';

export const LeadHistoryCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadHistoryCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadHistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadHistoryCreateWithoutLeadInputSchema),z.lazy(() => LeadHistoryUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadHistoryCreateOrConnectWithoutLeadInputSchema;
