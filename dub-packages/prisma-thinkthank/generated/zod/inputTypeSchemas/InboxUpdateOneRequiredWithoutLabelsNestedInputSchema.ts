import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxCreateWithoutLabelsInputSchema } from './InboxCreateWithoutLabelsInputSchema';
import { InboxUncheckedCreateWithoutLabelsInputSchema } from './InboxUncheckedCreateWithoutLabelsInputSchema';
import { InboxCreateOrConnectWithoutLabelsInputSchema } from './InboxCreateOrConnectWithoutLabelsInputSchema';
import { InboxUpsertWithoutLabelsInputSchema } from './InboxUpsertWithoutLabelsInputSchema';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxUpdateToOneWithWhereWithoutLabelsInputSchema } from './InboxUpdateToOneWithWhereWithoutLabelsInputSchema';
import { InboxUpdateWithoutLabelsInputSchema } from './InboxUpdateWithoutLabelsInputSchema';
import { InboxUncheckedUpdateWithoutLabelsInputSchema } from './InboxUncheckedUpdateWithoutLabelsInputSchema';

export const InboxUpdateOneRequiredWithoutLabelsNestedInputSchema: z.ZodType<Prisma.InboxUpdateOneRequiredWithoutLabelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => InboxCreateWithoutLabelsInputSchema),z.lazy(() => InboxUncheckedCreateWithoutLabelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutLabelsInputSchema).optional(),
  upsert: z.lazy(() => InboxUpsertWithoutLabelsInputSchema).optional(),
  connect: z.lazy(() => InboxWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InboxUpdateToOneWithWhereWithoutLabelsInputSchema),z.lazy(() => InboxUpdateWithoutLabelsInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutLabelsInputSchema) ]).optional(),
}).strict();

export default InboxUpdateOneRequiredWithoutLabelsNestedInputSchema;
