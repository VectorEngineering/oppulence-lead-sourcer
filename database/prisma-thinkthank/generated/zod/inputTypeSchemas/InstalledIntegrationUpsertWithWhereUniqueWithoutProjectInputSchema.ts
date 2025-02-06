import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateWithoutProjectInputSchema } from './InstalledIntegrationUpdateWithoutProjectInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutProjectInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutProjectInputSchema';
import { InstalledIntegrationCreateWithoutProjectInputSchema } from './InstalledIntegrationCreateWithoutProjectInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutProjectInputSchema } from './InstalledIntegrationUncheckedCreateWithoutProjectInputSchema';

export const InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutProjectInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutProjectInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default InstalledIntegrationUpsertWithWhereUniqueWithoutProjectInputSchema;
