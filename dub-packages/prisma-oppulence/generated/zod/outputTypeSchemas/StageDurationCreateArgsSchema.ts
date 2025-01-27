import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageDurationIncludeSchema } from '../inputTypeSchemas/StageDurationIncludeSchema'
import { StageDurationCreateInputSchema } from '../inputTypeSchemas/StageDurationCreateInputSchema'
import { StageDurationUncheckedCreateInputSchema } from '../inputTypeSchemas/StageDurationUncheckedCreateInputSchema'
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { PipelineStageArgsSchema } from "../outputTypeSchemas/PipelineStageArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageDurationSelectSchema: z.ZodType<Prisma.StageDurationSelect> = z.object({
  id: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  stageId: z.boolean().optional(),
  expectedDays: z.boolean().optional(),
  warningDays: z.boolean().optional(),
  criticalDays: z.boolean().optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  stage: z.union([z.boolean(),z.lazy(() => PipelineStageArgsSchema)]).optional(),
}).strict()

export const StageDurationCreateArgsSchema: z.ZodType<Prisma.StageDurationCreateArgs> = z.object({
  select: StageDurationSelectSchema.optional(),
  include: StageDurationIncludeSchema.optional(),
  data: z.union([ StageDurationCreateInputSchema,StageDurationUncheckedCreateInputSchema ]),
}).strict() ;

export default StageDurationCreateArgsSchema;
