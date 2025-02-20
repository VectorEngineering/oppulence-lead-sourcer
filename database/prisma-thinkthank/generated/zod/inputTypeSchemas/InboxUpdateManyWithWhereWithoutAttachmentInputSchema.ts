import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema';
import { InboxUpdateManyMutationInputSchema } from './InboxUpdateManyMutationInputSchema';
import { InboxUncheckedUpdateManyWithoutAttachmentInputSchema } from './InboxUncheckedUpdateManyWithoutAttachmentInputSchema';

export const InboxUpdateManyWithWhereWithoutAttachmentInputSchema: z.ZodType<Prisma.InboxUpdateManyWithWhereWithoutAttachmentInput> = z.object({
  where: z.lazy(() => InboxScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InboxUpdateManyMutationInputSchema),z.lazy(() => InboxUncheckedUpdateManyWithoutAttachmentInputSchema) ]),
}).strict();

export default InboxUpdateManyWithWhereWithoutAttachmentInputSchema;
