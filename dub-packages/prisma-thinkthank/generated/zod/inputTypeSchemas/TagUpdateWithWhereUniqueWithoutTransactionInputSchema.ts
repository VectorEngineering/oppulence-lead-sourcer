import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutTransactionInputSchema } from './TagUpdateWithoutTransactionInputSchema';
import { TagUncheckedUpdateWithoutTransactionInputSchema } from './TagUncheckedUpdateWithoutTransactionInputSchema';

export const TagUpdateWithWhereUniqueWithoutTransactionInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutTransactionInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutTransactionInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTransactionInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutTransactionInputSchema;
