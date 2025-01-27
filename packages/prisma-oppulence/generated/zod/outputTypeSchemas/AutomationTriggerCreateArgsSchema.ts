import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationTriggerIncludeSchema } from '../inputTypeSchemas/AutomationTriggerIncludeSchema'
import { AutomationTriggerCreateInputSchema } from '../inputTypeSchemas/AutomationTriggerCreateInputSchema'
import { AutomationTriggerUncheckedCreateInputSchema } from '../inputTypeSchemas/AutomationTriggerUncheckedCreateInputSchema'
import { PipelineAutomationArgsSchema } from './PipelineAutomationArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationTriggerSelectSchema: z.ZodType<Prisma.AutomationTriggerSelect> = z
    .object({
        id: z.boolean().optional(),
        automationId: z.boolean().optional(),
        field: z.boolean().optional(),
        operator: z.boolean().optional(),
        value: z.boolean().optional(),
        automation: z.union([z.boolean(), z.lazy(() => PipelineAutomationArgsSchema)]).optional()
    })
    .strict()

export const AutomationTriggerCreateArgsSchema: z.ZodType<Prisma.AutomationTriggerCreateArgs> = z
    .object({
        select: AutomationTriggerSelectSchema.optional(),
        include: AutomationTriggerIncludeSchema.optional(),
        data: z.union([AutomationTriggerCreateInputSchema, AutomationTriggerUncheckedCreateInputSchema])
    })
    .strict()

export default AutomationTriggerCreateArgsSchema
