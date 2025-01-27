import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkflowExecutionIncludeSchema } from '../inputTypeSchemas/WorkflowExecutionIncludeSchema'
import { WorkflowExecutionWhereUniqueInputSchema } from '../inputTypeSchemas/WorkflowExecutionWhereUniqueInputSchema'
import { ExecutionPhaseFindManyArgsSchema } from "../outputTypeSchemas/ExecutionPhaseFindManyArgsSchema"
import { WorkflowArgsSchema } from "../outputTypeSchemas/WorkflowArgsSchema"
import { WorkflowExecutionCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkflowExecutionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowExecutionSelectSchema: z.ZodType<Prisma.WorkflowExecutionSelect> = z.object({
  id: z.boolean().optional(),
  workflowId: z.boolean().optional(),
  userId: z.boolean().optional(),
  trigger: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  definition: z.boolean().optional(),
  creditsConsumed: z.boolean().optional(),
  phases: z.union([z.boolean(),z.lazy(() => ExecutionPhaseFindManyArgsSchema)]).optional(),
  workflow: z.union([z.boolean(),z.lazy(() => WorkflowArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkflowExecutionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WorkflowExecutionFindUniqueArgsSchema: z.ZodType<Prisma.WorkflowExecutionFindUniqueArgs> = z.object({
  select: WorkflowExecutionSelectSchema.optional(),
  include: WorkflowExecutionIncludeSchema.optional(),
  where: WorkflowExecutionWhereUniqueInputSchema,
}).strict() ;

export default WorkflowExecutionFindUniqueArgsSchema;
