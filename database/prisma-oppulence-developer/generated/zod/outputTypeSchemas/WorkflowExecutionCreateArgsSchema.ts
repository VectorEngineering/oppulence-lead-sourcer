import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkflowExecutionIncludeSchema } from '../inputTypeSchemas/WorkflowExecutionIncludeSchema'
import { WorkflowExecutionCreateInputSchema } from '../inputTypeSchemas/WorkflowExecutionCreateInputSchema'
import { WorkflowExecutionUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkflowExecutionUncheckedCreateInputSchema'
import { ExecutionPhaseFindManyArgsSchema } from './ExecutionPhaseFindManyArgsSchema'
import { WorkflowArgsSchema } from './WorkflowArgsSchema'
import { WorkflowExecutionCountOutputTypeArgsSchema } from './WorkflowExecutionCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowExecutionSelectSchema: z.ZodType<Prisma.WorkflowExecutionSelect> = z
    .object({
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
        phases: z.union([z.boolean(), z.lazy(() => ExecutionPhaseFindManyArgsSchema)]).optional(),
        workflow: z.union([z.boolean(), z.lazy(() => WorkflowArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => WorkflowExecutionCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const WorkflowExecutionCreateArgsSchema: z.ZodType<Prisma.WorkflowExecutionCreateArgs> = z
    .object({
        select: WorkflowExecutionSelectSchema.optional(),
        include: WorkflowExecutionIncludeSchema.optional(),
        data: z.union([WorkflowExecutionCreateInputSchema, WorkflowExecutionUncheckedCreateInputSchema])
    })
    .strict()

export default WorkflowExecutionCreateArgsSchema
