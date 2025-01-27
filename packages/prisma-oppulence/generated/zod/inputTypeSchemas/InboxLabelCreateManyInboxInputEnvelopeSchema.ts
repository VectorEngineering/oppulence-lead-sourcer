import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxLabelCreateManyInboxInputSchema } from './InboxLabelCreateManyInboxInputSchema';

export const InboxLabelCreateManyInboxInputEnvelopeSchema: z.ZodType<Prisma.InboxLabelCreateManyInboxInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InboxLabelCreateManyInboxInputSchema),z.lazy(() => InboxLabelCreateManyInboxInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InboxLabelCreateManyInboxInputEnvelopeSchema;
