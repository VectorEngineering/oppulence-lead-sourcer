import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationCreateWithoutUserInputSchema } from './InstalledIntegrationCreateWithoutUserInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutUserInputSchema } from './InstalledIntegrationUncheckedCreateWithoutUserInputSchema';

export const InstalledIntegrationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default InstalledIntegrationCreateOrConnectWithoutUserInputSchema;
