import { z } from 'zod';

export const TaskStatusSchema = z.enum(['open','in_progress','completed','blocked','canceled']);

export type TaskStatusType = `${z.infer<typeof TaskStatusSchema>}`

export default TaskStatusSchema;
