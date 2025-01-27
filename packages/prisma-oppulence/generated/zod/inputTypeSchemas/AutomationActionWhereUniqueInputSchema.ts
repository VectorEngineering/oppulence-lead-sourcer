import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionWhereInputSchema } from './AutomationActionWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { PipelineAutomationRelationFilterSchema } from './PipelineAutomationRelationFilterSchema'
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema'

export const AutomationActionWhereUniqueInputSchema: z.ZodType<Prisma.AutomationActionWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => AutomationActionWhereInputSchema), z.lazy(() => AutomationActionWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => AutomationActionWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => AutomationActionWhereInputSchema), z.lazy(() => AutomationActionWhereInputSchema).array()])
                    .optional(),
                automationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                template: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                automation: z
                    .union([z.lazy(() => PipelineAutomationRelationFilterSchema), z.lazy(() => PipelineAutomationWhereInputSchema)])
                    .optional()
            })
            .strict()
    )

export default AutomationActionWhereUniqueInputSchema
