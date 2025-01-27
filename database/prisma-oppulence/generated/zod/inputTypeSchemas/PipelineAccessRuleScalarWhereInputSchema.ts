import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumAccessLevelFilterSchema } from './EnumAccessLevelFilterSchema'
import { AccessLevelSchema } from './AccessLevelSchema'

export const PipelineAccessRuleScalarWhereInputSchema: z.ZodType<Prisma.PipelineAccessRuleScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => PipelineAccessRuleScalarWhereInputSchema), z.lazy(() => PipelineAccessRuleScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => PipelineAccessRuleScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => PipelineAccessRuleScalarWhereInputSchema), z.lazy(() => PipelineAccessRuleScalarWhereInputSchema).array()])
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
        accessLevel: z.union([z.lazy(() => EnumAccessLevelFilterSchema), z.lazy(() => AccessLevelSchema)]).optional()
    })
    .strict()

export default PipelineAccessRuleScalarWhereInputSchema
