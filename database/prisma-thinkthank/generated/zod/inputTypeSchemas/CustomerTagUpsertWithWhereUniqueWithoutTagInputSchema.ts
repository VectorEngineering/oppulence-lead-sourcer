import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereUniqueInputSchema } from './CustomerTagWhereUniqueInputSchema';
import { CustomerTagUpdateWithoutTagInputSchema } from './CustomerTagUpdateWithoutTagInputSchema';
import { CustomerTagUncheckedUpdateWithoutTagInputSchema } from './CustomerTagUncheckedUpdateWithoutTagInputSchema';
import { CustomerTagCreateWithoutTagInputSchema } from './CustomerTagCreateWithoutTagInputSchema';
import { CustomerTagUncheckedCreateWithoutTagInputSchema } from './CustomerTagUncheckedCreateWithoutTagInputSchema';

export const CustomerTagUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => CustomerTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CustomerTagUpdateWithoutTagInputSchema),z.lazy(() => CustomerTagUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerTagCreateWithoutTagInputSchema),z.lazy(() => CustomerTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default CustomerTagUpsertWithWhereUniqueWithoutTagInputSchema;
