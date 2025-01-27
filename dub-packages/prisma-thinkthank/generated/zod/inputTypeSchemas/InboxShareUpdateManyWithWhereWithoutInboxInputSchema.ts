import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxShareScalarWhereInputSchema } from './InboxShareScalarWhereInputSchema';
import { InboxShareUpdateManyMutationInputSchema } from './InboxShareUpdateManyMutationInputSchema';
import { InboxShareUncheckedUpdateManyWithoutInboxInputSchema } from './InboxShareUncheckedUpdateManyWithoutInboxInputSchema';

export const InboxShareUpdateManyWithWhereWithoutInboxInputSchema: z.ZodType<Prisma.InboxShareUpdateManyWithWhereWithoutInboxInput> = z.object({
  where: z.lazy(() => InboxShareScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InboxShareUpdateManyMutationInputSchema),z.lazy(() => InboxShareUncheckedUpdateManyWithoutInboxInputSchema) ]),
}).strict();

export default InboxShareUpdateManyWithWhereWithoutInboxInputSchema;
