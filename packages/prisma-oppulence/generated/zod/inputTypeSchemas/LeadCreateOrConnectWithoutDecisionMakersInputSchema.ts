import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutDecisionMakersInputSchema } from './LeadCreateWithoutDecisionMakersInputSchema';
import { LeadUncheckedCreateWithoutDecisionMakersInputSchema } from './LeadUncheckedCreateWithoutDecisionMakersInputSchema';

export const LeadCreateOrConnectWithoutDecisionMakersInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutDecisionMakersInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutDecisionMakersInputSchema),z.lazy(() => LeadUncheckedCreateWithoutDecisionMakersInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutDecisionMakersInputSchema;
