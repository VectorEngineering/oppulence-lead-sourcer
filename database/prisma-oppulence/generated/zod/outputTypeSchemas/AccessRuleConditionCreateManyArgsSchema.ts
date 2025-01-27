import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccessRuleConditionCreateManyInputSchema } from '../inputTypeSchemas/AccessRuleConditionCreateManyInputSchema'

export const AccessRuleConditionCreateManyArgsSchema: z.ZodType<Prisma.AccessRuleConditionCreateManyArgs> = z
    .object({
        data: z.union([AccessRuleConditionCreateManyInputSchema, AccessRuleConditionCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default AccessRuleConditionCreateManyArgsSchema
