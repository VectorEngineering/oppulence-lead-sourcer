import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxUpdateWithoutLabelsInputSchema } from './InboxUpdateWithoutLabelsInputSchema';
import { InboxUncheckedUpdateWithoutLabelsInputSchema } from './InboxUncheckedUpdateWithoutLabelsInputSchema';
import { InboxCreateWithoutLabelsInputSchema } from './InboxCreateWithoutLabelsInputSchema';
import { InboxUncheckedCreateWithoutLabelsInputSchema } from './InboxUncheckedCreateWithoutLabelsInputSchema';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';

export const InboxUpsertWithoutLabelsInputSchema: z.ZodType<Prisma.InboxUpsertWithoutLabelsInput> = z.object({
  update: z.union([ z.lazy(() => InboxUpdateWithoutLabelsInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutLabelsInputSchema) ]),
  create: z.union([ z.lazy(() => InboxCreateWithoutLabelsInputSchema),z.lazy(() => InboxUncheckedCreateWithoutLabelsInputSchema) ]),
  where: z.lazy(() => InboxWhereInputSchema).optional()
}).strict();

export default InboxUpsertWithoutLabelsInputSchema;
