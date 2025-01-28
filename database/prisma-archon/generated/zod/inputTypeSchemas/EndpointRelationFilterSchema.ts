import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema';

export const EndpointRelationFilterSchema: z.ZodType<Prisma.EndpointRelationFilter> = z.object({
  is: z.lazy(() => EndpointWhereInputSchema).optional(),
  isNot: z.lazy(() => EndpointWhereInputSchema).optional()
}).strict();

export default EndpointRelationFilterSchema;
