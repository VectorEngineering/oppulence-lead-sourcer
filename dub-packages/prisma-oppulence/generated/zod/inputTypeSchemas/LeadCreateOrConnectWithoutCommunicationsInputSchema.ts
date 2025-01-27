import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutCommunicationsInputSchema } from './LeadCreateWithoutCommunicationsInputSchema';
import { LeadUncheckedCreateWithoutCommunicationsInputSchema } from './LeadUncheckedCreateWithoutCommunicationsInputSchema';

export const LeadCreateOrConnectWithoutCommunicationsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutCommunicationsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutCommunicationsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCommunicationsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutCommunicationsInputSchema;
