import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationIncludeSchema } from '../inputTypeSchemas/PipelineAutomationIncludeSchema'
import { PipelineAutomationWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereUniqueInputSchema'
import { PipelineAutomationCreateInputSchema } from '../inputTypeSchemas/PipelineAutomationCreateInputSchema'
import { PipelineAutomationUncheckedCreateInputSchema } from '../inputTypeSchemas/PipelineAutomationUncheckedCreateInputSchema'
import { PipelineAutomationUpdateInputSchema } from '../inputTypeSchemas/PipelineAutomationUpdateInputSchema'
import { PipelineAutomationUncheckedUpdateInputSchema } from '../inputTypeSchemas/PipelineAutomationUncheckedUpdateInputSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
import { AutomationTriggerFindManyArgsSchema } from './AutomationTriggerFindManyArgsSchema'
import { AutomationActionFindManyArgsSchema } from './AutomationActionFindManyArgsSchema'
import { AutomationConditionFindManyArgsSchema } from './AutomationConditionFindManyArgsSchema'
import { PipelineAutomationCountOutputTypeArgsSchema } from './PipelineAutomationCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineAutomationSelectSchema: z.ZodType<Prisma.PipelineAutomationSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        isActive: z.boolean().optional(),
        triggerType: z.boolean().optional(),
        actionType: z.boolean().optional(),
        priority: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lastTriggered: z.boolean().optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        triggers: z.union([z.boolean(), z.lazy(() => AutomationTriggerFindManyArgsSchema)]).optional(),
        actions: z.union([z.boolean(), z.lazy(() => AutomationActionFindManyArgsSchema)]).optional(),
        conditions: z.union([z.boolean(), z.lazy(() => AutomationConditionFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineAutomationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const PipelineAutomationUpsertArgsSchema: z.ZodType<Prisma.PipelineAutomationUpsertArgs> = z
    .object({
        select: PipelineAutomationSelectSchema.optional(),
        include: PipelineAutomationIncludeSchema.optional(),
        where: PipelineAutomationWhereUniqueInputSchema,
        create: z.union([PipelineAutomationCreateInputSchema, PipelineAutomationUncheckedCreateInputSchema]),
        update: z.union([PipelineAutomationUpdateInputSchema, PipelineAutomationUncheckedUpdateInputSchema])
    })
    .strict()

export default PipelineAutomationUpsertArgsSchema
