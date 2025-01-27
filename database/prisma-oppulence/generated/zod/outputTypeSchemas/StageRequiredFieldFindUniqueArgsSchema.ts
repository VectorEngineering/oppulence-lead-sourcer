import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageRequiredFieldIncludeSchema } from '../inputTypeSchemas/StageRequiredFieldIncludeSchema'
import { StageRequiredFieldWhereUniqueInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereUniqueInputSchema'
import { PipelineStageArgsSchema } from './PipelineStageArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageRequiredFieldSelectSchema: z.ZodType<Prisma.StageRequiredFieldSelect> = z
    .object({
        id: z.boolean().optional(),
        stageId: z.boolean().optional(),
        fieldName: z.boolean().optional(),
        errorMessage: z.boolean().optional(),
        stage: z.union([z.boolean(), z.lazy(() => PipelineStageArgsSchema)]).optional()
    })
    .strict()

export const StageRequiredFieldFindUniqueArgsSchema: z.ZodType<Prisma.StageRequiredFieldFindUniqueArgs> = z
    .object({
        select: StageRequiredFieldSelectSchema.optional(),
        include: StageRequiredFieldIncludeSchema.optional(),
        where: StageRequiredFieldWhereUniqueInputSchema
    })
    .strict()

export default StageRequiredFieldFindUniqueArgsSchema
