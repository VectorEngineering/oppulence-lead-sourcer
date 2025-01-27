import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';
import { InstalledIntegrationUpdateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUpdateWithoutRefreshTokensInputSchema';
import { InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema } from './InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema';

export const InstalledIntegrationUpdateToOneWithWhereWithoutRefreshTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateToOneWithWhereWithoutRefreshTokensInput> = z.object({
  where: z.lazy(() => InstalledIntegrationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InstalledIntegrationUpdateWithoutRefreshTokensInputSchema),z.lazy(() => InstalledIntegrationUncheckedUpdateWithoutRefreshTokensInputSchema) ]),
}).strict();

export default InstalledIntegrationUpdateToOneWithWhereWithoutRefreshTokensInputSchema;
