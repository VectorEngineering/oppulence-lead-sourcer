import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxCreateWithoutLabelsInputSchema } from './InboxCreateWithoutLabelsInputSchema';
import { InboxUncheckedCreateWithoutLabelsInputSchema } from './InboxUncheckedCreateWithoutLabelsInputSchema';
import { InboxCreateOrConnectWithoutLabelsInputSchema } from './InboxCreateOrConnectWithoutLabelsInputSchema';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';

export const InboxCreateNestedOneWithoutLabelsInputSchema: z.ZodType<Prisma.InboxCreateNestedOneWithoutLabelsInput> = z.object({
  create: z.union([ z.lazy(() => InboxCreateWithoutLabelsInputSchema),z.lazy(() => InboxUncheckedCreateWithoutLabelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutLabelsInputSchema).optional(),
  connect: z.lazy(() => InboxWhereUniqueInputSchema).optional()
}).strict();

export default InboxCreateNestedOneWithoutLabelsInputSchema;
