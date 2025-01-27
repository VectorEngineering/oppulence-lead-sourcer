import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RegisteredDomainOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RegisteredDomainOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RegisteredDomainOrderByRelationAggregateInputSchema;
