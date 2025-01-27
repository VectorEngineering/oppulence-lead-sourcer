import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationConditionIncludeSchema } from '../inputTypeSchemas/AutomationConditionIncludeSchema'
import { AutomationConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationConditionWhereUniqueInputSchema'
import { PipelineAutomationArgsSchema } from './PipelineAutomationArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationConditionSelectSchema: z.ZodType<Prisma.AutomationConditionSelect> = z
    .object({
        id: z.boolean().optional(),
        automationId: z.boolean().optional(),
        field: z.boolean().optional(),
        operator: z.boolean().optional(),
        value: z.boolean().optional(),
        automation: z.union([z.boolean(), z.lazy(() => PipelineAutomationArgsSchema)]).optional()
    })
    .strict()

export const AutomationConditionDeleteArgsSchema: z.ZodType<Prisma.AutomationConditionDeleteArgs> = z
    .object({
        select: AutomationConditionSelectSchema.optional(),
        include: AutomationConditionIncludeSchema.optional(),
        where: AutomationConditionWhereUniqueInputSchema
    })
    .strict()

export default AutomationConditionDeleteArgsSchema
