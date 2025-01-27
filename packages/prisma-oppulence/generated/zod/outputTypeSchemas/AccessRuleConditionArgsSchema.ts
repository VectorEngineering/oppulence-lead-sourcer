import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccessRuleConditionSelectSchema } from '../inputTypeSchemas/AccessRuleConditionSelectSchema'
import { AccessRuleConditionIncludeSchema } from '../inputTypeSchemas/AccessRuleConditionIncludeSchema'

export const AccessRuleConditionArgsSchema: z.ZodType<Prisma.AccessRuleConditionDefaultArgs> = z
    .object({
        select: z.lazy(() => AccessRuleConditionSelectSchema).optional(),
        include: z.lazy(() => AccessRuleConditionIncludeSchema).optional()
    })
    .strict()

export default AccessRuleConditionArgsSchema
