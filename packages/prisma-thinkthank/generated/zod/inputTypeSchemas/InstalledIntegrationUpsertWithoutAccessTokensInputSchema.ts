import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationUpdateWithoutAccessTokensInputSchema } from './InstalledIntegrationUpdateWithoutAccessTokensInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema';
import { InstalledIntegrationCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateWithoutAccessTokensInputSchema';
import { InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';

export const InstalledIntegrationUpsertWithoutAccessTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationUpsertWithoutAccessTokensInput> = z.object({
  update: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutAccessTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema) ]),
  create: z.union([ z.lazy(() => InstalledIntegrationCreateWithoutAccessTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema) ]),
  where: z.lazy(() => InstalledIntegrationWhereInputSchema).optional()
}).strict();

export default InstalledIntegrationUpsertWithoutAccessTokensInputSchema;
