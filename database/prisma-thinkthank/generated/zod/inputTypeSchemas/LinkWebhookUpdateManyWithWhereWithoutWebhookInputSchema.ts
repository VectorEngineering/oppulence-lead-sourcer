import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWebhookScalarWhereInputSchema } from './LinkWebhookScalarWhereInputSchema';
import { LinkWebhookUpdateManyMutationInputSchema } from './LinkWebhookUpdateManyMutationInputSchema';
import { LinkWebhookUncheckedUpdateManyWithoutWebhookInputSchema } from './LinkWebhookUncheckedUpdateManyWithoutWebhookInputSchema';

export const LinkWebhookUpdateManyWithWhereWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUpdateManyWithWhereWithoutWebhookInput> = z.object({
  where: z.lazy(() => LinkWebhookScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LinkWebhookUpdateManyMutationInputSchema),z.lazy(() => LinkWebhookUncheckedUpdateManyWithoutWebhookInputSchema) ]),
}).strict();

export default LinkWebhookUpdateManyWithWhereWithoutWebhookInputSchema;
