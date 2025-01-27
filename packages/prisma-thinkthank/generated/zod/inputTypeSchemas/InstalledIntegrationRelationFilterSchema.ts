import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';

export const InstalledIntegrationRelationFilterSchema: z.ZodType<Prisma.InstalledIntegrationRelationFilter> = z.object({
  is: z.lazy(() => InstalledIntegrationWhereInputSchema).optional(),
  isNot: z.lazy(() => InstalledIntegrationWhereInputSchema).optional()
}).strict();

export default InstalledIntegrationRelationFilterSchema;
