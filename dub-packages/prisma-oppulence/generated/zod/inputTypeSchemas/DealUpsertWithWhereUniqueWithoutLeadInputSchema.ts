import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateWithoutLeadInputSchema } from './DealUpdateWithoutLeadInputSchema';
import { DealUncheckedUpdateWithoutLeadInputSchema } from './DealUncheckedUpdateWithoutLeadInputSchema';
import { DealCreateWithoutLeadInputSchema } from './DealCreateWithoutLeadInputSchema';
import { DealUncheckedCreateWithoutLeadInputSchema } from './DealUncheckedCreateWithoutLeadInputSchema';

export const DealUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DealUpdateWithoutLeadInputSchema),z.lazy(() => DealUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => DealCreateWithoutLeadInputSchema),z.lazy(() => DealUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default DealUpsertWithWhereUniqueWithoutLeadInputSchema;
