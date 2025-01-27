import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookScalarWhereInputSchema } from './LinkWebhookScalarWhereInputSchema';
import { LinkWebhookUpdateManyMutationInputSchema } from './LinkWebhookUpdateManyMutationInputSchema';
import { LinkWebhookUncheckedUpdateManyWithoutLinkInputSchema } from './LinkWebhookUncheckedUpdateManyWithoutLinkInputSchema';

export const LinkWebhookUpdateManyWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUpdateManyWithWhereWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkWebhookScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LinkWebhookUpdateManyMutationInputSchema),z.lazy(() => LinkWebhookUncheckedUpdateManyWithoutLinkInputSchema) ]),
}).strict();

export default LinkWebhookUpdateManyWithWhereWithoutLinkInputSchema;
