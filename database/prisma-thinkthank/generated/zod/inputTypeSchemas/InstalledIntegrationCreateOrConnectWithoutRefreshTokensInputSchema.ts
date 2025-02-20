import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateWithoutRefreshTokensInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema';

export const InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateOrConnectWithoutRefreshTokensInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutRefreshTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutRefreshTokensInputSchema) ]),
}).strict();

export default InstalledIntegrationCreateOrConnectWithoutRefreshTokensInputSchema;
