import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationIncludeSchema } from '../inputTypeSchemas/StageDurationIncludeSchema'
import { StageDurationWhereUniqueInputSchema } from '../inputTypeSchemas/StageDurationWhereUniqueInputSchema'
import { StageDurationCreateInputSchema } from '../inputTypeSchemas/StageDurationCreateInputSchema'
import { StageDurationUncheckedCreateInputSchema } from '../inputTypeSchemas/StageDurationUncheckedCreateInputSchema'
import { StageDurationUpdateInputSchema } from '../inputTypeSchemas/StageDurationUpdateInputSchema'
import { StageDurationUncheckedUpdateInputSchema } from '../inputTypeSchemas/StageDurationUncheckedUpdateInputSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
import { PipelineStageArgsSchema } from './PipelineStageArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageDurationSelectSchema: z.ZodType<Prisma.StageDurationSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        stageId: z.boolean().optional(),
        expectedDays: z.boolean().optional(),
        warningDays: z.boolean().optional(),
        criticalDays: z.boolean().optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        stage: z.union([z.boolean(), z.lazy(() => PipelineStageArgsSchema)]).optional()
    })
    .strict()

export const StageDurationUpsertArgsSchema: z.ZodType<Prisma.StageDurationUpsertArgs> = z
    .object({
        select: StageDurationSelectSchema.optional(),
        include: StageDurationIncludeSchema.optional(),
        where: StageDurationWhereUniqueInputSchema,
        create: z.union([StageDurationCreateInputSchema, StageDurationUncheckedCreateInputSchema]),
        update: z.union([StageDurationUpdateInputSchema, StageDurationUncheckedUpdateInputSchema])
    })
    .strict()

export default StageDurationUpsertArgsSchema
