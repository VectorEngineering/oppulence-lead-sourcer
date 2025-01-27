import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineAutomationOrderByWithRelationInputSchema } from './PipelineAutomationOrderByWithRelationInputSchema';
import { AutomationActionOrderByRelevanceInputSchema } from './AutomationActionOrderByRelevanceInputSchema';

export const AutomationActionOrderByWithRelationInputSchema: z.ZodType<Prisma.AutomationActionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  automationId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  template: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  automation: z.lazy(() => PipelineAutomationOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AutomationActionOrderByRelevanceInputSchema).optional()
}).strict();

export default AutomationActionOrderByWithRelationInputSchema;
