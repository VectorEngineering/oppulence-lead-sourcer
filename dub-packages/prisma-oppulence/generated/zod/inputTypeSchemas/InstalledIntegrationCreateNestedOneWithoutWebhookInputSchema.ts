import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationCreateWithoutWebhookInputSchema } from './InstalledIntegrationCreateWithoutWebhookInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema } from './InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema';
import { InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema } from './InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';

export const InstalledIntegrationCreateNestedOneWithoutWebhookInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateNestedOneWithoutWebhookInput> = z.object({
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutWebhookInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutWebhookInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InstalledIntegrationCreateOrConnectWithoutWebhookInputSchema).optional(),
  connect: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema).optional()
}).strict();

export default InstalledIntegrationCreateNestedOneWithoutWebhookInputSchema;
