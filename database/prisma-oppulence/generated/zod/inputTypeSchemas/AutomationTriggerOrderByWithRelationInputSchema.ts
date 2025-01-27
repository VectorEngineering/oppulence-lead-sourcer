import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { PipelineAutomationOrderByWithRelationInputSchema } from './PipelineAutomationOrderByWithRelationInputSchema'
import { AutomationTriggerOrderByRelevanceInputSchema } from './AutomationTriggerOrderByRelevanceInputSchema'

export const AutomationTriggerOrderByWithRelationInputSchema: z.ZodType<Prisma.AutomationTriggerOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        automationId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        automation: z.lazy(() => PipelineAutomationOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => AutomationTriggerOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default AutomationTriggerOrderByWithRelationInputSchema
