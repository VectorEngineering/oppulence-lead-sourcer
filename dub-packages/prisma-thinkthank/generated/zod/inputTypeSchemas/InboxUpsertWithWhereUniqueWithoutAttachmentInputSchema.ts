import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema';
import { InboxUpdateWithoutAttachmentInputSchema } from './InboxUpdateWithoutAttachmentInputSchema';
import { InboxUncheckedUpdateWithoutAttachmentInputSchema } from './InboxUncheckedUpdateWithoutAttachmentInputSchema';
import { InboxCreateWithoutAttachmentInputSchema } from './InboxCreateWithoutAttachmentInputSchema';
import { InboxUncheckedCreateWithoutAttachmentInputSchema } from './InboxUncheckedCreateWithoutAttachmentInputSchema';

export const InboxUpsertWithWhereUniqueWithoutAttachmentInputSchema: z.ZodType<Prisma.InboxUpsertWithWhereUniqueWithoutAttachmentInput> = z.object({
  where: z.lazy(() => InboxWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InboxUpdateWithoutAttachmentInputSchema),z.lazy(() => InboxUncheckedUpdateWithoutAttachmentInputSchema) ]),
  create: z.union([ z.lazy(() => InboxCreateWithoutAttachmentInputSchema),z.lazy(() => InboxUncheckedCreateWithoutAttachmentInputSchema) ]),
}).strict();

export default InboxUpsertWithWhereUniqueWithoutAttachmentInputSchema;
