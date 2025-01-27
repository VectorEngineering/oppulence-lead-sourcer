import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageDurationIncludeSchema } from '../inputTypeSchemas/StageDurationIncludeSchema'
import { StageDurationWhereInputSchema } from '../inputTypeSchemas/StageDurationWhereInputSchema'
import { StageDurationOrderByWithRelationInputSchema } from '../inputTypeSchemas/StageDurationOrderByWithRelationInputSchema'
import { StageDurationWhereUniqueInputSchema } from '../inputTypeSchemas/StageDurationWhereUniqueInputSchema'
import { StageDurationScalarFieldEnumSchema } from '../inputTypeSchemas/StageDurationScalarFieldEnumSchema'
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

export const StageDurationFindManyArgsSchema: z.ZodType<Prisma.StageDurationFindManyArgs> = z.object({
  select: StageDurationSelectSchema.optional(),
  include: StageDurationIncludeSchema.optional(),
  where: StageDurationWhereInputSchema.optional(),
  orderBy: z.union([ StageDurationOrderByWithRelationInputSchema.array(),StageDurationOrderByWithRelationInputSchema ]).optional(),
  cursor: StageDurationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StageDurationScalarFieldEnumSchema,StageDurationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default StageDurationFindManyArgsSchema;
