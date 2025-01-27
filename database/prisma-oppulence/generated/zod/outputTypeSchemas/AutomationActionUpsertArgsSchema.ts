import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationActionIncludeSchema } from '../inputTypeSchemas/AutomationActionIncludeSchema'
import { AutomationActionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationActionWhereUniqueInputSchema'
import { AutomationActionCreateInputSchema } from '../inputTypeSchemas/AutomationActionCreateInputSchema'
import { AutomationActionUncheckedCreateInputSchema } from '../inputTypeSchemas/AutomationActionUncheckedCreateInputSchema'
import { AutomationActionUpdateInputSchema } from '../inputTypeSchemas/AutomationActionUpdateInputSchema'
import { AutomationActionUncheckedUpdateInputSchema } from '../inputTypeSchemas/AutomationActionUncheckedUpdateInputSchema'
import { PipelineAutomationArgsSchema } from './PipelineAutomationArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationActionSelectSchema: z.ZodType<Prisma.AutomationActionSelect> = z
    .object({
        id: z.boolean().optional(),
        automationId: z.boolean().optional(),
        field: z.boolean().optional(),
        value: z.boolean().optional(),
        template: z.boolean().optional(),
        automation: z.union([z.boolean(), z.lazy(() => PipelineAutomationArgsSchema)]).optional()
    })
    .strict()

export const AutomationActionUpsertArgsSchema: z.ZodType<Prisma.AutomationActionUpsertArgs> = z
    .object({
        select: AutomationActionSelectSchema.optional(),
        include: AutomationActionIncludeSchema.optional(),
        where: AutomationActionWhereUniqueInputSchema,
        create: z.union([AutomationActionCreateInputSchema, AutomationActionUncheckedCreateInputSchema]),
        update: z.union([AutomationActionUpdateInputSchema, AutomationActionUncheckedUpdateInputSchema])
    })
    .strict()

export default AutomationActionUpsertArgsSchema
