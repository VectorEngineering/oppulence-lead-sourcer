import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema } from './StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema'
import { StageRequiredFieldWhereInputSchema } from './StageRequiredFieldWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { PipelineStageRelationFilterSchema } from './PipelineStageRelationFilterSchema'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const StageRequiredFieldWhereUniqueInputSchema: z.ZodType<Prisma.StageRequiredFieldWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            stageId_fieldName: z.lazy(() => StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            stageId_fieldName: z.lazy(() => StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                stageId_fieldName: z.lazy(() => StageRequiredFieldStageIdFieldNameCompoundUniqueInputSchema).optional(),
                AND: z
                    .union([z.lazy(() => StageRequiredFieldWhereInputSchema), z.lazy(() => StageRequiredFieldWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => StageRequiredFieldWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => StageRequiredFieldWhereInputSchema), z.lazy(() => StageRequiredFieldWhereInputSchema).array()])
                    .optional(),
                stageId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                fieldName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                errorMessage: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                stage: z.union([z.lazy(() => PipelineStageRelationFilterSchema), z.lazy(() => PipelineStageWhereInputSchema)]).optional()
            })
            .strict()
    )

export default StageRequiredFieldWhereUniqueInputSchema
