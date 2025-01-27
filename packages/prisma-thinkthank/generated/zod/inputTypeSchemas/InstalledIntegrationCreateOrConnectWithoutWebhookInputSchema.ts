import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationCreateWithoutWebhookInputSchema } from './InstalledIntegrationCreateWithoutWebhookInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema';

export const InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateOrConnectWithoutWebhookInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutWebhookInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema) ]),
}).strict();

export default InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema;
