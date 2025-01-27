import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationCreateWithoutProjectInputSchema } from './InstalledIntegrationCreateWithoutProjectInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutProjectInputSchema } from './InstalledIntegrationUncheckedCreateWithoutProjectInputSchema';

export const InstalledIntegrationCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutProjectInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default InstalledIntegrationCreateOrConnectWithoutProjectInputSchema;
