import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccessRuleConditionWhereInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereInputSchema'

export const AccessRuleConditionDeleteManyArgsSchema: z.ZodType<Prisma.AccessRuleConditionDeleteManyArgs> = z
    .object({
        where: AccessRuleConditionWhereInputSchema.optional()
    })
    .strict()

export default AccessRuleConditionDeleteManyArgsSchema
