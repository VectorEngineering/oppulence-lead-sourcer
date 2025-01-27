import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealCreateWithoutLeadInputSchema } from './DealCreateWithoutLeadInputSchema';
import { DealUncheckedCreateWithoutLeadInputSchema } from './DealUncheckedCreateWithoutLeadInputSchema';

export const DealCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealCreateWithoutLeadInputSchema),z.lazy(() => DealUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default DealCreateOrConnectWithoutLeadInputSchema;
