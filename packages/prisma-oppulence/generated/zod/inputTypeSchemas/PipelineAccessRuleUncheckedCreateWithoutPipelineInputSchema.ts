import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessLevelSchema } from './AccessLevelSchema'
import { AccessRuleConditionUncheckedCreateNestedManyWithoutRuleInputSchema } from './AccessRuleConditionUncheckedCreateNestedManyWithoutRuleInputSchema'

export const PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleUncheckedCreateWithoutPipelineInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            roleId: z.string().optional().nullable(),
            userId: z.string().optional().nullable(),
            teamId: z.string().optional().nullable(),
            accessLevel: z.lazy(() => AccessLevelSchema),
            conditions: z.lazy(() => AccessRuleConditionUncheckedCreateNestedManyWithoutRuleInputSchema).optional()
        })
        .strict()

export default PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema
