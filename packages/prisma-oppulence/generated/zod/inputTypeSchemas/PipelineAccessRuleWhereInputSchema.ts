import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumAccessLevelFilterSchema } from './EnumAccessLevelFilterSchema'
import { AccessLevelSchema } from './AccessLevelSchema'
import { AccessRuleConditionListRelationFilterSchema } from './AccessRuleConditionListRelationFilterSchema'
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'

export const PipelineAccessRuleWhereInputSchema: z.ZodType<Prisma.PipelineAccessRuleWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => PipelineAccessRuleWhereInputSchema), z.lazy(() => PipelineAccessRuleWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => PipelineAccessRuleWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => PipelineAccessRuleWhereInputSchema), z.lazy(() => PipelineAccessRuleWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        pipelineId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        roleId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        teamId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessLevel: z.union([z.lazy(() => EnumAccessLevelFilterSchema), z.lazy(() => AccessLevelSchema)]).optional(),
        conditions: z.lazy(() => AccessRuleConditionListRelationFilterSchema).optional(),
        pipeline: z.union([z.lazy(() => PipelineRelationFilterSchema), z.lazy(() => PipelineWhereInputSchema)]).optional()
    })
    .strict()

export default PipelineAccessRuleWhereInputSchema
