import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageRequiredFieldIncludeSchema } from '../inputTypeSchemas/StageRequiredFieldIncludeSchema'
import { StageRequiredFieldWhereInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereInputSchema'
import { StageRequiredFieldOrderByWithRelationInputSchema } from '../inputTypeSchemas/StageRequiredFieldOrderByWithRelationInputSchema'
import { StageRequiredFieldWhereUniqueInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereUniqueInputSchema'
import { StageRequiredFieldScalarFieldEnumSchema } from '../inputTypeSchemas/StageRequiredFieldScalarFieldEnumSchema'
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

export const StageRequiredFieldFindFirstArgsSchema: z.ZodType<Prisma.StageRequiredFieldFindFirstArgs> = z
    .object({
        select: StageRequiredFieldSelectSchema.optional(),
        include: StageRequiredFieldIncludeSchema.optional(),
        where: StageRequiredFieldWhereInputSchema.optional(),
        orderBy: z
            .union([StageRequiredFieldOrderByWithRelationInputSchema.array(), StageRequiredFieldOrderByWithRelationInputSchema])
            .optional(),
        cursor: StageRequiredFieldWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([StageRequiredFieldScalarFieldEnumSchema, StageRequiredFieldScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default StageRequiredFieldFindFirstArgsSchema
