import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';
import { InboxUpdateWithoutSharesInputSchema } from './InboxUpdateWithoutSharesInputSchema';
import { InboxUncheckedUpdateWithoutSharesInputSchema } from './InboxUncheckedUpdateWithoutSharesInputSchema';

export const InboxUpdateToOneWithWhereWithoutSharesInputSchema: z.ZodType<Prisma.InboxUpdateToOneWithWhereWithoutSharesInput> = z.object({
  where: z.lazy(() => InboxWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InboxUpdateWithoutSharesInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutSharesInputSchema) ]),
}).strict();

export default InboxUpdateToOneWithWhereWithoutSharesInputSchema;
