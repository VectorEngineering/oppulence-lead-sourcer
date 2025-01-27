import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutProductsInputSchema } from './DealCreateWithoutProductsInputSchema';
import { DealUncheckedCreateWithoutProductsInputSchema } from './DealUncheckedCreateWithoutProductsInputSchema';
import { DealCreateOrConnectWithoutProductsInputSchema } from './DealCreateOrConnectWithoutProductsInputSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutProductsInputSchema),z.lazy(() => DealUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputSchema).optional()
}).strict();

export default DealCreateNestedOneWithoutProductsInputSchema;
