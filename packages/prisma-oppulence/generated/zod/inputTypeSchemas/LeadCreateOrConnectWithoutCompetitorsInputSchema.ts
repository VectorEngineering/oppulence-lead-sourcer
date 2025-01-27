import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutCompetitorsInputSchema } from './LeadCreateWithoutCompetitorsInputSchema';
import { LeadUncheckedCreateWithoutCompetitorsInputSchema } from './LeadUncheckedCreateWithoutCompetitorsInputSchema';

export const LeadCreateOrConnectWithoutCompetitorsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutCompetitorsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCompetitorsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutCompetitorsInputSchema;
