import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPersonalDetailsWhereUniqueInputSchema } from './LeadPersonalDetailsWhereUniqueInputSchema';
import { LeadPersonalDetailsCreateWithoutLeadInputSchema } from './LeadPersonalDetailsCreateWithoutLeadInputSchema';
import { LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema';

export const LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadPersonalDetailsCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadPersonalDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadPersonalDetailsCreateWithoutLeadInputSchema),z.lazy(() => LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema;
