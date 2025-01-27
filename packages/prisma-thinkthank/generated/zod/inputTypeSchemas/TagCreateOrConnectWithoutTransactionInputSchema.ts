import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutTransactionInputSchema } from './TagCreateWithoutTransactionInputSchema';
import { TagUncheckedCreateWithoutTransactionInputSchema } from './TagUncheckedCreateWithoutTransactionInputSchema';

export const TagCreateOrConnectWithoutTransactionInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutTransactionInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutTransactionInputSchema;
