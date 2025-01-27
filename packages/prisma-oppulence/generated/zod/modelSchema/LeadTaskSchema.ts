import { z } from 'zod'
import { TaskStatusSchema } from '../inputTypeSchemas/TaskStatusSchema'
import { TaskPrioritySchema } from '../inputTypeSchemas/TaskPrioritySchema'

/////////////////////////////////////////
// LEAD TASK SCHEMA
/////////////////////////////////////////

export const LeadTaskSchema = z.object({
    status: TaskStatusSchema,
    priority: TaskPrioritySchema,
    id: z.string().cuid(),
    leadId: z.string(),
    title: z.string(),
    description: z.string().nullish(),
    dueDate: z.coerce.date().nullish(),
    completedAt: z.coerce.date().nullish(),
    assignedToId: z.string().nullish(),
    createdBy: z.string().nullish(),
    updatedBy: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type LeadTask = z.infer<typeof LeadTaskSchema>

/////////////////////////////////////////
// LEAD TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadTaskOptionalDefaultsSchema = LeadTaskSchema.merge(
    z.object({
        status: TaskStatusSchema.optional(),
        priority: TaskPrioritySchema.optional(),
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type LeadTaskOptionalDefaults = z.infer<typeof LeadTaskOptionalDefaultsSchema>

export default LeadTaskSchema
