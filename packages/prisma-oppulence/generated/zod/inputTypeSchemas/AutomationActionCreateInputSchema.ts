import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAutomationCreateNestedOneWithoutActionsInputSchema } from './PipelineAutomationCreateNestedOneWithoutActionsInputSchema'

export const AutomationActionCreateInputSchema: z.ZodType<Prisma.AutomationActionCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        value: z.string(),
        template: z.string().optional().nullable(),
        automation: z.lazy(() => PipelineAutomationCreateNestedOneWithoutActionsInputSchema)
    })
    .strict()

export default AutomationActionCreateInputSchema
