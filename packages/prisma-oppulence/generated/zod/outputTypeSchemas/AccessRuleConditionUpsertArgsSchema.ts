import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccessRuleConditionIncludeSchema } from '../inputTypeSchemas/AccessRuleConditionIncludeSchema'
import { AccessRuleConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereUniqueInputSchema'
import { AccessRuleConditionCreateInputSchema } from '../inputTypeSchemas/AccessRuleConditionCreateInputSchema'
import { AccessRuleConditionUncheckedCreateInputSchema } from '../inputTypeSchemas/AccessRuleConditionUncheckedCreateInputSchema'
import { AccessRuleConditionUpdateInputSchema } from '../inputTypeSchemas/AccessRuleConditionUpdateInputSchema'
import { AccessRuleConditionUncheckedUpdateInputSchema } from '../inputTypeSchemas/AccessRuleConditionUncheckedUpdateInputSchema'
import { PipelineAccessRuleArgsSchema } from './PipelineAccessRuleArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccessRuleConditionSelectSchema: z.ZodType<Prisma.AccessRuleConditionSelect> = z
    .object({
        id: z.boolean().optional(),
        ruleId: z.boolean().optional(),
        field: z.boolean().optional(),
        operator: z.boolean().optional(),
        value: z.boolean().optional(),
        rule: z.union([z.boolean(), z.lazy(() => PipelineAccessRuleArgsSchema)]).optional()
    })
    .strict()

export const AccessRuleConditionUpsertArgsSchema: z.ZodType<Prisma.AccessRuleConditionUpsertArgs> = z
    .object({
        select: AccessRuleConditionSelectSchema.optional(),
        include: AccessRuleConditionIncludeSchema.optional(),
        where: AccessRuleConditionWhereUniqueInputSchema,
        create: z.union([AccessRuleConditionCreateInputSchema, AccessRuleConditionUncheckedCreateInputSchema]),
        update: z.union([AccessRuleConditionUpdateInputSchema, AccessRuleConditionUncheckedUpdateInputSchema])
    })
    .strict()

export default AccessRuleConditionUpsertArgsSchema
