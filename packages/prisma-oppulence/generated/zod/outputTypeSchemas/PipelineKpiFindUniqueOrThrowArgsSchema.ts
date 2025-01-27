import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineKpiIncludeSchema } from '../inputTypeSchemas/PipelineKpiIncludeSchema'
import { PipelineKpiWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineKpiWhereUniqueInputSchema'
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineKpiSelectSchema: z.ZodType<Prisma.PipelineKpiSelect> = z.object({
  id: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  target: z.boolean().optional(),
  current: z.boolean().optional(),
  unit: z.boolean().optional(),
  description: z.boolean().optional(),
  frequency: z.boolean().optional(),
  calculation: z.boolean().optional(),
  formula: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
}).strict()

export const PipelineKpiFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PipelineKpiFindUniqueOrThrowArgs> = z.object({
  select: PipelineKpiSelectSchema.optional(),
  include: PipelineKpiIncludeSchema.optional(),
  where: PipelineKpiWhereUniqueInputSchema,
}).strict() ;

export default PipelineKpiFindUniqueOrThrowArgsSchema;
