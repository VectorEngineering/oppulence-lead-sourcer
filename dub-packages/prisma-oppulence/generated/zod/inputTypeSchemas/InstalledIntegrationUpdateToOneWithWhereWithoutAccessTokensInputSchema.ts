import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';
import { InstalledIntegrationUpdateWithoutAccessTokensInputSchema } from './InstalledIntegrationUpdateWithoutAccessTokensInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema';

export const InstalledIntegrationUpdateToOneWithWhereWithoutAccessTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateToOneWithWhereWithoutAccessTokensInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutAccessTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutAccessTokensInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateToOneWithWhereWithoutAccessTokensInputSchema;
