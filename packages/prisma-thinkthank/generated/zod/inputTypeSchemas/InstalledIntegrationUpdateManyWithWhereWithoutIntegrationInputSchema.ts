import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationScalarWhereInputSchema } from './InstalledIntegrationScalarWhereInputSchema';
import { InstalledIntegrationUpdateManyMutationInputSchema } from './InstalledIntegrationUpdateManyMutationInputSchema';
import { InstalledIntegrationUncheckedUpdateManyWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedUpdateManyWithoutIntegrationInputSchema';

export const InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInput> = z.object({
  where: z.lazy(() => InstalledIntegrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateManyMutationInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateManyWithoutIntegrationInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateManyWithWhereWithoutIntegrationInputSchema;
