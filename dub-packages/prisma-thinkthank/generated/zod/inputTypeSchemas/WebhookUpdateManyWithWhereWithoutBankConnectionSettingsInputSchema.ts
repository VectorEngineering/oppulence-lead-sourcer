import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookScalarWhereInputSchema } from './WebhookScalarWhereInputSchema';
import { WebhookUpdateManyMutationInputSchema } from './WebhookUpdateManyMutationInputSchema';
import { WebhookUncheckedUpdateManyWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedUpdateManyWithoutBankConnectionSettingsInputSchema';

export const WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInput> = z.object({
  where: z.lazy(() => WebhookScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WebhookUpdateManyMutationInputSchema),z.lazy(() => WebhookUncheckedUpdateManyWithoutBankConnectionSettingsInputSchema) ]),
}).strict();

export default WebhookUpdateManyWithWhereWithoutBankConnectionSettingsInputSchema;
