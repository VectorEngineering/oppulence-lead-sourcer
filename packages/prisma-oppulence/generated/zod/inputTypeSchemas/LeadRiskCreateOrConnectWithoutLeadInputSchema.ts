import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRiskWhereUniqueInputSchema } from './LeadRiskWhereUniqueInputSchema';
import { LeadRiskCreateWithoutLeadInputSchema } from './LeadRiskCreateWithoutLeadInputSchema';
import { LeadRiskUncheckedCreateWithoutLeadInputSchema } from './LeadRiskUncheckedCreateWithoutLeadInputSchema';

export const LeadRiskCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadRiskCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadRiskWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadRiskCreateWithoutLeadInputSchema),z.lazy(() => LeadRiskUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadRiskCreateOrConnectWithoutLeadInputSchema;
