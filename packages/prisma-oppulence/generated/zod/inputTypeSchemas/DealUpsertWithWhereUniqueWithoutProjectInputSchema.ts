import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithoutProjectInputSchema } from './DealUpdateWithoutProjectInputSchema';
import { DealUncheckedUpdateWithoutProjectInputSchema } from './DealUncheckedUpdateWithoutProjectInputSchema';
import { DealCreateWithoutProjectInputSchema } from './DealCreateWithoutProjectInputSchema';
import { DealUncheckedCreateWithoutProjectInputSchema } from './DealUncheckedCreateWithoutProjectInputSchema';

export const DealUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DealUpdateWithoutProjectInputSchema),z.lazy(() => DealUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => DealCreateWithoutProjectInputSchema),z.lazy(() => DealUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default DealUpsertWithWhereUniqueWithoutProjectInputSchema;
