import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageRequiredFieldIncludeSchema } from '../inputTypeSchemas/StageRequiredFieldIncludeSchema'
import { StageRequiredFieldCreateInputSchema } from '../inputTypeSchemas/StageRequiredFieldCreateInputSchema'
import { StageRequiredFieldUncheckedCreateInputSchema } from '../inputTypeSchemas/StageRequiredFieldUncheckedCreateInputSchema'
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

export const StageRequiredFieldCreateArgsSchema: z.ZodType<Prisma.StageRequiredFieldCreateArgs> = z
    .object({
        select: StageRequiredFieldSelectSchema.optional(),
        include: StageRequiredFieldIncludeSchema.optional(),
        data: z.union([StageRequiredFieldCreateInputSchema, StageRequiredFieldUncheckedCreateInputSchema])
    })
    .strict()

export default StageRequiredFieldCreateArgsSchema
