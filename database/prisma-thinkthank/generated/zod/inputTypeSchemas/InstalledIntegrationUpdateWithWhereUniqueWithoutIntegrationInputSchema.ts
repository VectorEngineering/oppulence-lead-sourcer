import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateWithoutIntegrationInputSchema } from './InstalledIntegrationUpdateWithoutIntegrationInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutIntegrationInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutIntegrationInputSchema';

export const InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutIntegrationInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutIntegrationInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateWithWhereUniqueWithoutIntegrationInputSchema;
