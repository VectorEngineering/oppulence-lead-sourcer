import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationScalarWhereInputSchema } from './InstalledIntegrationScalarWhereInputSchema';
import { InstalledIntegrationUpdateManyMutationInputSchema } from './InstalledIntegrationUpdateManyMutationInputSchema';
import { InstalledIntegrationUncheckedUpdateManyWithoutUserInputSchema } from './InstalledIntegrationUncheckedUpdateManyWithoutUserInputSchema';

export const InstalledIntegrationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => InstalledIntegrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateManyMutationInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateManyWithWhereWithoutUserInputSchema;
