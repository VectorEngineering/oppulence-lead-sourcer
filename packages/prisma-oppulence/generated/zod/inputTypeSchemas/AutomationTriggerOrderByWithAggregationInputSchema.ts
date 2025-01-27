import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AutomationTriggerCountOrderByAggregateInputSchema } from './AutomationTriggerCountOrderByAggregateInputSchema';
import { AutomationTriggerMaxOrderByAggregateInputSchema } from './AutomationTriggerMaxOrderByAggregateInputSchema';
import { AutomationTriggerMinOrderByAggregateInputSchema } from './AutomationTriggerMinOrderByAggregateInputSchema';

export const AutomationTriggerOrderByWithAggregationInputSchema: z.ZodType<Prisma.AutomationTriggerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  automationId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  operator: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AutomationTriggerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AutomationTriggerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AutomationTriggerMinOrderByAggregateInputSchema).optional()
}).strict();

export default AutomationTriggerOrderByWithAggregationInputSchema;
