import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationScalarWhereInputSchema } from './InstalledIntegrationScalarWhereInputSchema';
import { InstalledIntegrationUpdateManyMutationInputSchema } from './InstalledIntegrationUpdateManyMutationInputSchema';
import { InstalledIntegrationUncheckedUpdateManyWithoutProjectInputSchema } from './InstalledIntegrationUncheckedUpdateManyWithoutProjectInputSchema';

export const InstalledIntegrationUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => InstalledIntegrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateManyMutationInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateManyWithWhereWithoutProjectInputSchema;
