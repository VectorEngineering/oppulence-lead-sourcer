import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealCreateWithoutProductsInputSchema } from './DealCreateWithoutProductsInputSchema';
import { DealUncheckedCreateWithoutProductsInputSchema } from './DealUncheckedCreateWithoutProductsInputSchema';

export const DealCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => DealWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DealCreateWithoutProductsInputSchema),z.lazy(() => DealUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export default DealCreateOrConnectWithoutProductsInputSchema;
