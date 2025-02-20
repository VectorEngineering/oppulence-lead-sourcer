import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema';
import { InboxUpdateManyMutationInputSchema } from './InboxUpdateManyMutationInputSchema';
import { InboxUncheckedUpdateManyWithoutParentInputSchema } from './InboxUncheckedUpdateManyWithoutParentInputSchema';

export const InboxUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.InboxUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => InboxScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InboxUpdateManyMutationInputSchema),z.lazy(() => InboxUncheckedUpdateManyWithoutParentInputSchema) ]),
}).strict();

export default InboxUpdateManyWithWhereWithoutParentInputSchema;
