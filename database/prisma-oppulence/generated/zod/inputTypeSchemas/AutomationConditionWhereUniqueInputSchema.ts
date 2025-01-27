import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationConditionWhereInputSchema } from './AutomationConditionWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { PipelineAutomationRelationFilterSchema } from './PipelineAutomationRelationFilterSchema'
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema'

export const AutomationConditionWhereUniqueInputSchema: z.ZodType<Prisma.AutomationConditionWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => AutomationConditionWhereInputSchema), z.lazy(() => AutomationConditionWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => AutomationConditionWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => AutomationConditionWhereInputSchema), z.lazy(() => AutomationConditionWhereInputSchema).array()])
                    .optional(),
                automationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                operator: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                automation: z
                    .union([z.lazy(() => PipelineAutomationRelationFilterSchema), z.lazy(() => PipelineAutomationWhereInputSchema)])
                    .optional()
            })
            .strict()
    )

export default AutomationConditionWhereUniqueInputSchema
