import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealCreateWithoutAssignedToInputSchema } from './DealCreateWithoutAssignedToInputSchema';
import { DealUncheckedCreateWithoutAssignedToInputSchema } from './DealUncheckedCreateWithoutAssignedToInputSchema';

export const DealCreateOrConnectWithoutAssignedToInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutAssignedToInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealCreateWithoutAssignedToInputSchema),z.lazy(() => DealUncheckedCreateWithoutAssignedToInputSchema) ]),
}).strict();

export default DealCreateOrConnectWithoutAssignedToInputSchema;
