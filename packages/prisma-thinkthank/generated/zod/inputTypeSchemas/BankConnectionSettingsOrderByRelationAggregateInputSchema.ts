import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankConnectionSettingsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BankConnectionSettingsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankConnectionSettingsOrderByRelationAggregateInputSchema;
