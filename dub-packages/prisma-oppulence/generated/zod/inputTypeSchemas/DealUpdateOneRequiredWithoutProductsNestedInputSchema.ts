import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutProductsInputSchema } from './DealCreateWithoutProductsInputSchema';
import { DealUncheckedCreateWithoutProductsInputSchema } from './DealUncheckedCreateWithoutProductsInputSchema';
import { DealCreateOrConnectWithoutProductsInputSchema } from './DealCreateOrConnectWithoutProductsInputSchema';
import { DealUpsertWithoutProductsInputSchema } from './DealUpsertWithoutProductsInputSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateToOneWithWhereWithoutProductsInputSchema } from './DealUpdateToOneWithWhereWithoutProductsInputSchema';
import { DealUpdateWithoutProductsInputSchema } from './DealUpdateWithoutProductsInputSchema';
import { DealUncheckedUpdateWithoutProductsInputSchema } from './DealUncheckedUpdateWithoutProductsInputSchema';

export const DealUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutProductsInputSchema),z.lazy(() => DealUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => DealUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DealUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => DealUpdateWithoutProductsInputSchema),z.lazy(() => DealUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export default DealUpdateOneRequiredWithoutProductsNestedInputSchema;
