import { z } from 'zod'

export const TaskPrioritySchema = z.enum(['low', 'normal', 'high', 'urgent'])

export type TaskPriorityType = `${z.infer<typeof TaskPrioritySchema>}`

export default TaskPrioritySchema
