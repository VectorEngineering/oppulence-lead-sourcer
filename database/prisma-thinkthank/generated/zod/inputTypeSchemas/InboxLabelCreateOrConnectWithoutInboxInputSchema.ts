import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxLabelWhereUniqueInputSchema } from './InboxLabelWhereUniqueInputSchema';
import { InboxLabelCreateWithoutInboxInputSchema } from './InboxLabelCreateWithoutInboxInputSchema';
import { InboxLabelUncheckedCreateWithoutInboxInputSchema } from './InboxLabelUncheckedCreateWithoutInboxInputSchema';

export const InboxLabelCreateOrConnectWithoutInboxInputSchema: z.ZodType<Prisma.InboxLabelCreateOrConnectWithoutInboxInput> = z.object({
  where: z.lazy(() => InboxLabelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InboxLabelCreateWithoutInboxInputSchema),z.lazy(() => InboxLabelUncheckedCreateWithoutInboxInputSchema) ]),
}).strict();

export default InboxLabelCreateOrConnectWithoutInboxInputSchema;
