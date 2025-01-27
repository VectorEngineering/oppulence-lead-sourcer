import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereUniqueInputSchema } from './InstalledIntegrationWhereUniqueInputSchema';
import { InstalledIntegrationUpdateWithoutUserInputSchema } from './InstalledIntegrationUpdateWithoutUserInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutUserInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutUserInputSchema';
import { InstalledIntegrationCreateWithoutUserInputSchema } from './InstalledIntegrationCreateWithoutUserInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutUserInputSchema } from './InstalledIntegrationUncheckedCreateWithoutUserInputSchema';

export const InstalledIntegrationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutUserInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default InstalledIntegrationUpsertWithWhereUniqueWithoutUserInputSchema;
