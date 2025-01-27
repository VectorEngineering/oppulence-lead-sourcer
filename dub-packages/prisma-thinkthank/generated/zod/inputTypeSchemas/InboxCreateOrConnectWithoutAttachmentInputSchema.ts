import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxCreateWithoutAttachmentInputSchema } from './InboxCreateWithoutAttachmentInputSchema';
import { InboxUncheckedCreateWithoutAttachmentInputSchema } from './InboxUncheckedCreateWithoutAttachmentInputSchema';

export const InboxCreateOrConnectWithoutAttachmentInputSchema: z.ZodType<Prisma.InboxCreateOrConnectWithoutAttachmentInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxCreateWithoutAttachmentInputSchema),z.lazy(() => InboxUncheckedCreateWithoutAttachmentInputSchema) ]),
}).strict();

export default InboxCreateOrConnectWithoutAttachmentInputSchema;
