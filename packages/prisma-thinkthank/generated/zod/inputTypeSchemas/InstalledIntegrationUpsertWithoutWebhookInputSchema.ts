import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationUpdateWithoutWebhookInputSchema } from './InstalledIntegrationUpdateWithoutWebhookInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema';
import { InstalledIntegrationCreateWithoutWebhookInputSchema } from './InstalledIntegrationCreateWithoutWebhookInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';

export const InstalledIntegrationUpsertWithoutWebhookInputSchema: z.ZodType<Prisma.InstalledIntegrationUpsertWithoutWebhookInput> = z.object({
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutWebhookInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutWebhookInputSchema) ]),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutWebhookInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema) ]),
  where: z.lazy(() => InstalledIntegrationWhereInputSchema).optional()
}).strict();

export default InstalledIntegrationUpsertWithoutWebhookInputSchema;
