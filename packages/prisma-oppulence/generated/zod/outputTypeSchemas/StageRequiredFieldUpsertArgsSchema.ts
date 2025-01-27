import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageRequiredFieldIncludeSchema } from '../inputTypeSchemas/StageRequiredFieldIncludeSchema'
import { StageRequiredFieldWhereUniqueInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereUniqueInputSchema'
import { StageRequiredFieldCreateInputSchema } from '../inputTypeSchemas/StageRequiredFieldCreateInputSchema'
import { StageRequiredFieldUncheckedCreateInputSchema } from '../inputTypeSchemas/StageRequiredFieldUncheckedCreateInputSchema'
import { StageRequiredFieldUpdateInputSchema } from '../inputTypeSchemas/StageRequiredFieldUpdateInputSchema'
import { StageRequiredFieldUncheckedUpdateInputSchema } from '../inputTypeSchemas/StageRequiredFieldUncheckedUpdateInputSchema'
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

export const StageRequiredFieldUpsertArgsSchema: z.ZodType<Prisma.StageRequiredFieldUpsertArgs> = z.object({
  select: StageRequiredFieldSelectSchema.optional(),
  include: StageRequiredFieldIncludeSchema.optional(),
  where: StageRequiredFieldWhereUniqueInputSchema,
  create: z.union([ StageRequiredFieldCreateInputSchema,StageRequiredFieldUncheckedCreateInputSchema ]),
  update: z.union([ StageRequiredFieldUpdateInputSchema,StageRequiredFieldUncheckedUpdateInputSchema ]),
}).strict() ;

export default StageRequiredFieldUpsertArgsSchema;
