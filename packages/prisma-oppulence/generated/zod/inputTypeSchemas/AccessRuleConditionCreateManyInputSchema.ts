import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const AccessRuleConditionCreateManyInputSchema: z.ZodType<Prisma.AccessRuleConditionCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        ruleId: z.string(),
        field: z.string(),
        operator: z.string(),
        value: z.string()
    })
    .strict()

export default AccessRuleConditionCreateManyInputSchema
