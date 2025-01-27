import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealCreateWithoutProjectInputSchema } from './DealCreateWithoutProjectInputSchema';
import { DealUncheckedCreateWithoutProjectInputSchema } from './DealUncheckedCreateWithoutProjectInputSchema';

export const DealCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealCreateWithoutProjectInputSchema),z.lazy(() => DealUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default DealCreateOrConnectWithoutProjectInputSchema;
