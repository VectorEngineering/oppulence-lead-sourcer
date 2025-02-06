import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema';
import { WebhookUpdateWithoutBankConnectionSettingsInputSchema } from './WebhookUpdateWithoutBankConnectionSettingsInputSchema';
import { WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema';

export const WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInput> = z.object({
  where: z.lazy(() => WebhookWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WebhookUpdateWithoutBankConnectionSettingsInputSchema),z.lazy(() => WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema) ]),
}).strict();

export default WebhookUpdateWithWhereUniqueWithoutBankConnectionSettingsInputSchema;
