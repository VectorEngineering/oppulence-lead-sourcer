import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema';
import { TransactionUpdateWithoutTagsInputSchema } from './TransactionUpdateWithoutTagsInputSchema';
import { TransactionUncheckedUpdateWithoutTagsInputSchema } from './TransactionUncheckedUpdateWithoutTagsInputSchema';

export const TransactionUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default TransactionUpdateWithWhereUniqueWithoutTagsInputSchema;
