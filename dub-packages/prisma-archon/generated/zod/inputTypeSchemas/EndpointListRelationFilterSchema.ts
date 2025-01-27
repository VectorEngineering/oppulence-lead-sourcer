import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema';

export const EndpointListRelationFilterSchema: z.ZodType<Prisma.EndpointListRelationFilter> = z.object({
  every: z.lazy(() => EndpointWhereInputSchema).optional(),
  some: z.lazy(() => EndpointWhereInputSchema).optional(),
  none: z.lazy(() => EndpointWhereInputSchema).optional()
}).strict();

export default EndpointListRelationFilterSchema;
