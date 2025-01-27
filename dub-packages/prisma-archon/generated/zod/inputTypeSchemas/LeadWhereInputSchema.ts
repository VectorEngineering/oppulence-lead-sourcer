import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EndpointRelationFilterSchema } from './EndpointRelationFilterSchema';
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema';

export const LeadWhereInputSchema: z.ZodType<Prisma.LeadWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadWhereInputSchema),z.lazy(() => LeadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadWhereInputSchema),z.lazy(() => LeadWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endpointId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endpoint: z.union([ z.lazy(() => EndpointRelationFilterSchema),z.lazy(() => EndpointWhereInputSchema) ]).optional(),
}).strict();

export default LeadWhereInputSchema;
