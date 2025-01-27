import { z } from 'zod';

export const DealTaskStatusSchema = z.enum(['pending','in_progress','completed','canceled']);

export type DealTaskStatusType = `${z.infer<typeof DealTaskStatusSchema>}`

export default DealTaskStatusSchema;
