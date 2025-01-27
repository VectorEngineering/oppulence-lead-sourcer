import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccessRuleConditionWhereInputSchema } from './AccessRuleConditionWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { PipelineAccessRuleRelationFilterSchema } from './PipelineAccessRuleRelationFilterSchema'
import { PipelineAccessRuleWhereInputSchema } from './PipelineAccessRuleWhereInputSchema'

export const AccessRuleConditionWhereUniqueInputSchema: z.ZodType<Prisma.AccessRuleConditionWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => AccessRuleConditionWhereInputSchema), z.lazy(() => AccessRuleConditionWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => AccessRuleConditionWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => AccessRuleConditionWhereInputSchema), z.lazy(() => AccessRuleConditionWhereInputSchema).array()])
                    .optional(),
                ruleId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                operator: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                rule: z
                    .union([z.lazy(() => PipelineAccessRuleRelationFilterSchema), z.lazy(() => PipelineAccessRuleWhereInputSchema)])
                    .optional()
            })
            .strict()
    )

export default AccessRuleConditionWhereUniqueInputSchema
