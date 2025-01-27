import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PipelineOrderByWithRelationInputSchema } from './PipelineOrderByWithRelationInputSchema';
import { AutomationTriggerOrderByRelationAggregateInputSchema } from './AutomationTriggerOrderByRelationAggregateInputSchema';
import { AutomationActionOrderByRelationAggregateInputSchema } from './AutomationActionOrderByRelationAggregateInputSchema';
import { AutomationConditionOrderByRelationAggregateInputSchema } from './AutomationConditionOrderByRelationAggregateInputSchema';
import { PipelineAutomationOrderByRelevanceInputSchema } from './PipelineAutomationOrderByRelevanceInputSchema';

export const PipelineAutomationOrderByWithRelationInputSchema: z.ZodType<Prisma.PipelineAutomationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pipelineId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  triggerType: z.lazy(() => SortOrderSchema).optional(),
  actionType: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastTriggered: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pipeline: z.lazy(() => PipelineOrderByWithRelationInputSchema).optional(),
  triggers: z.lazy(() => AutomationTriggerOrderByRelationAggregateInputSchema).optional(),
  actions: z.lazy(() => AutomationActionOrderByRelationAggregateInputSchema).optional(),
  conditions: z.lazy(() => AutomationConditionOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => PipelineAutomationOrderByRelevanceInputSchema).optional()
}).strict();

export default PipelineAutomationOrderByWithRelationInputSchema;
