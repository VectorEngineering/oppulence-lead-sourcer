import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutAssignedToInputSchema } from './LeadCreateWithoutAssignedToInputSchema';
import { LeadUncheckedCreateWithoutAssignedToInputSchema } from './LeadUncheckedCreateWithoutAssignedToInputSchema';

export const LeadCreateOrConnectWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutAssignedToInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutAssignedToInputSchema),z.lazy(() => LeadUncheckedCreateWithoutAssignedToInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutAssignedToInputSchema;
