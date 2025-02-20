import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateWithoutUserInputSchema } from './InstalledIntegrationUpdateWithoutUserInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutUserInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutUserInputSchema';

export const InstalledIntegrationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateWithWhereUniqueWithoutUserInputSchema;
