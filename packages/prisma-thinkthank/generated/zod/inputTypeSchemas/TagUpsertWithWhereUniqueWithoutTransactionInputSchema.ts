import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutTransactionInputSchema } from './TagUpdateWithoutTransactionInputSchema';
import { TagUncheckedUpdateWithoutTransactionInputSchema } from './TagUncheckedUpdateWithoutTransactionInputSchema';
import { TagCreateWithoutTransactionInputSchema } from './TagCreateWithoutTransactionInputSchema';
import { TagUncheckedCreateWithoutTransactionInputSchema } from './TagUncheckedCreateWithoutTransactionInputSchema';

export const TagUpsertWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutTransactionInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutTransactionInputSchema;
