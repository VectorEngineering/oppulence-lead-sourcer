import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineStageIncludeSchema } from '../inputTypeSchemas/PipelineStageIncludeSchema'
import { PipelineStageWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineStageWhereUniqueInputSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
import { DealFindManyArgsSchema } from './DealFindManyArgsSchema'
import { StageRequiredFieldFindManyArgsSchema } from './StageRequiredFieldFindManyArgsSchema'
import { StageDurationArgsSchema } from './StageDurationArgsSchema'
import { PipelineStageCountOutputTypeArgsSchema } from './PipelineStageCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineStageSelectSchema: z.ZodType<Prisma.PipelineStageSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        order: z.boolean().optional(),
        probability: z.boolean().optional(),
        color: z.boolean().optional(),
        icon: z.boolean().optional(),
        isDefault: z.boolean().optional(),
        isFinal: z.boolean().optional(),
        isWon: z.boolean().optional(),
        isLost: z.boolean().optional(),
        autoMoveAfterDays: z.boolean().optional(),
        nextStageId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        deals: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        requiredFields: z.union([z.boolean(), z.lazy(() => StageRequiredFieldFindManyArgsSchema)]).optional(),
        stageDuration: z.union([z.boolean(), z.lazy(() => StageDurationArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineStageCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const PipelineStageFindUniqueArgsSchema: z.ZodType<Prisma.PipelineStageFindUniqueArgs> = z
    .object({
        select: PipelineStageSelectSchema.optional(),
        include: PipelineStageIncludeSchema.optional(),
        where: PipelineStageWhereUniqueInputSchema
    })
    .strict()

export default PipelineStageFindUniqueArgsSchema
