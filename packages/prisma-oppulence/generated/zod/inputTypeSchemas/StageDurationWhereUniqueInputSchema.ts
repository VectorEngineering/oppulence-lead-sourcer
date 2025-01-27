import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationPipelineIdStageIdCompoundUniqueInputSchema } from './StageDurationPipelineIdStageIdCompoundUniqueInputSchema'
import { StageDurationWhereInputSchema } from './StageDurationWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { PipelineRelationFilterSchema } from './PipelineRelationFilterSchema'
import { PipelineWhereInputSchema } from './PipelineWhereInputSchema'
import { PipelineStageRelationFilterSchema } from './PipelineStageRelationFilterSchema'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const StageDurationWhereUniqueInputSchema: z.ZodType<Prisma.StageDurationWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            stageId: z.string(),
            pipelineId_stageId: z.lazy(() => StageDurationPipelineIdStageIdCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid(),
            stageId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            pipelineId_stageId: z.lazy(() => StageDurationPipelineIdStageIdCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            stageId: z.string(),
            pipelineId_stageId: z.lazy(() => StageDurationPipelineIdStageIdCompoundUniqueInputSchema)
        }),
        z.object({
            stageId: z.string()
        }),
        z.object({
            pipelineId_stageId: z.lazy(() => StageDurationPipelineIdStageIdCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                stageId: z.string().optional(),
                pipelineId_stageId: z.lazy(() => StageDurationPipelineIdStageIdCompoundUniqueInputSchema).optional(),
                AND: z.union([z.lazy(() => StageDurationWhereInputSchema), z.lazy(() => StageDurationWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => StageDurationWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => StageDurationWhereInputSchema), z.lazy(() => StageDurationWhereInputSchema).array()]).optional(),
                pipelineId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                expectedDays: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                warningDays: z
                    .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
                    .optional()
                    .nullable(),
                criticalDays: z
                    .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
                    .optional()
                    .nullable(),
                pipeline: z.union([z.lazy(() => PipelineRelationFilterSchema), z.lazy(() => PipelineWhereInputSchema)]).optional(),
                stage: z.union([z.lazy(() => PipelineStageRelationFilterSchema), z.lazy(() => PipelineStageWhereInputSchema)]).optional()
            })
            .strict()
    )

export default StageDurationWhereUniqueInputSchema
