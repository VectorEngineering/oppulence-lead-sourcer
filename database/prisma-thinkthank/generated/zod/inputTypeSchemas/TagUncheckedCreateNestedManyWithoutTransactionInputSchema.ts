import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutTransactionInputSchema } from './TagCreateWithoutTransactionInputSchema';
import { TagUncheckedCreateWithoutTransactionInputSchema } from './TagUncheckedCreateWithoutTransactionInputSchema';
import { TagCreateOrConnectWithoutTransactionInputSchema } from './TagCreateOrConnectWithoutTransactionInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagUncheckedCreateNestedManyWithoutTransactionInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutTransactionInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionInputSchema),z.lazy(() => TagCreateWithoutTransactionInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTransactionInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTransactionInputSchema),z.lazy(() => TagCreateOrConnectWithoutTransactionInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedCreateNestedManyWithoutTransactionInputSchema;
