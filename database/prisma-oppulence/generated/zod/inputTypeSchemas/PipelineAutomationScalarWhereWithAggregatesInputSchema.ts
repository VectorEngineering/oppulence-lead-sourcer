import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { EnumAutomationTriggerTypeWithAggregatesFilterSchema } from './EnumAutomationTriggerTypeWithAggregatesFilterSchema'
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema'
import { EnumAutomationActionTypeWithAggregatesFilterSchema } from './EnumAutomationActionTypeWithAggregatesFilterSchema'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'

export const PipelineAutomationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PipelineAutomationScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => PipelineAutomationScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PipelineAutomationScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => PipelineAutomationScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PipelineAutomationScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PipelineAutomationScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        pipelineId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        isActive: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        triggerType: z
            .union([z.lazy(() => EnumAutomationTriggerTypeWithAggregatesFilterSchema), z.lazy(() => AutomationTriggerTypeSchema)])
            .optional(),
        actionType: z
            .union([z.lazy(() => EnumAutomationActionTypeWithAggregatesFilterSchema), z.lazy(() => AutomationActionTypeSchema)])
            .optional(),
        priority: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        lastTriggered: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default PipelineAutomationScalarWhereWithAggregatesInputSchema
