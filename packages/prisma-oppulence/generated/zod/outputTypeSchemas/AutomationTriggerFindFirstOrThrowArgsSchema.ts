import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationTriggerIncludeSchema } from '../inputTypeSchemas/AutomationTriggerIncludeSchema'
import { AutomationTriggerWhereInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereInputSchema'
import { AutomationTriggerOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutomationTriggerOrderByWithRelationInputSchema'
import { AutomationTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereUniqueInputSchema'
import { AutomationTriggerScalarFieldEnumSchema } from '../inputTypeSchemas/AutomationTriggerScalarFieldEnumSchema'
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

export const AutomationTriggerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AutomationTriggerFindFirstOrThrowArgs> = z
    .object({
        select: AutomationTriggerSelectSchema.optional(),
        include: AutomationTriggerIncludeSchema.optional(),
        where: AutomationTriggerWhereInputSchema.optional(),
        orderBy: z
            .union([AutomationTriggerOrderByWithRelationInputSchema.array(), AutomationTriggerOrderByWithRelationInputSchema])
            .optional(),
        cursor: AutomationTriggerWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([AutomationTriggerScalarFieldEnumSchema, AutomationTriggerScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default AutomationTriggerFindFirstOrThrowArgsSchema
