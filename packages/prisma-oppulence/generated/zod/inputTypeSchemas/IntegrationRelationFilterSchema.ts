import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema';

export const IntegrationRelationFilterSchema: z.ZodType<Prisma.IntegrationRelationFilter> = z.object({
  is: z.lazy(() => IntegrationWhereInputSchema).optional(),
  isNot: z.lazy(() => IntegrationWhereInputSchema).optional()
}).strict();

export default IntegrationRelationFilterSchema;
