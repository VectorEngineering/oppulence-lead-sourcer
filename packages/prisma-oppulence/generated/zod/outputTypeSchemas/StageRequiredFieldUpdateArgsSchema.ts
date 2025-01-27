import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageRequiredFieldIncludeSchema } from '../inputTypeSchemas/StageRequiredFieldIncludeSchema'
import { StageRequiredFieldUpdateInputSchema } from '../inputTypeSchemas/StageRequiredFieldUpdateInputSchema'
import { StageRequiredFieldUncheckedUpdateInputSchema } from '../inputTypeSchemas/StageRequiredFieldUncheckedUpdateInputSchema'
import { StageRequiredFieldWhereUniqueInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereUniqueInputSchema'
import { PipelineStageArgsSchema } from "../outputTypeSchemas/PipelineStageArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageRequiredFieldSelectSchema: z.ZodType<Prisma.StageRequiredFieldSelect> = z.object({
  id: z.boolean().optional(),
  stageId: z.boolean().optional(),
  fieldName: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  stage: z.union([z.boolean(),z.lazy(() => PipelineStageArgsSchema)]).optional(),
}).strict()

export const StageRequiredFieldUpdateArgsSchema: z.ZodType<Prisma.StageRequiredFieldUpdateArgs> = z.object({
  select: StageRequiredFieldSelectSchema.optional(),
  include: StageRequiredFieldIncludeSchema.optional(),
  data: z.union([ StageRequiredFieldUpdateInputSchema,StageRequiredFieldUncheckedUpdateInputSchema ]),
  where: StageRequiredFieldWhereUniqueInputSchema,
}).strict() ;

export default StageRequiredFieldUpdateArgsSchema;
