import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { EnumAutomationTriggerTypeFilterSchema } from './EnumAutomationTriggerTypeFilterSchema'
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema'
import { EnumAutomationActionTypeFilterSchema } from './EnumAutomationActionTypeFilterSchema'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { AutomationTriggerListRelationFilterSchema } from './AutomationTriggerListRelationFilterSchema'
import { AutomationActionListRelationFilterSchema } from './AutomationActionListRelationFilterSchema'
import { AutomationConditionListRelationFilterSchema } from './AutomationConditionListRelationFilterSchema'

export const PipelineAutomationWhereUniqueInputSchema: z.ZodType<Prisma.PipelineAutomationWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => PipelineAutomationWhereInputSchema), z.lazy(() => PipelineAutomationWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => PipelineAutomationWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => PipelineAutomationWhereInputSchema), z.lazy(() => PipelineAutomationWhereInputSchema).array()])
                    .optional(),
                pipelineId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                description: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                isActive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                triggerType: z
                    .union([z.lazy(() => EnumAutomationTriggerTypeFilterSchema), z.lazy(() => AutomationTriggerTypeSchema)])
                    .optional(),
                actionType: z
                    .union([z.lazy(() => EnumAutomationActionTypeFilterSchema), z.lazy(() => AutomationActionTypeSchema)])
                    .optional(),
                priority: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                lastTriggered: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                pipeline: z.union([z.lazy(() => PipelineRelationFilterSchema), z.lazy(() => PipelineWhereInputSchema)]).optional(),
                triggers: z.lazy(() => AutomationTriggerListRelationFilterSchema).optional(),
                actions: z.lazy(() => AutomationActionListRelationFilterSchema).optional(),
                conditions: z.lazy(() => AutomationConditionListRelationFilterSchema).optional()
            })
            .strict()
    )

export default PipelineAutomationWhereUniqueInputSchema
