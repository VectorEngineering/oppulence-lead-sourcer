import { z } from 'zod';

export const DealTaskPrioritySchema = z.enum(['low','medium','high','urgent']);

export type DealTaskPriorityType = `${z.infer<typeof DealTaskPrioritySchema>}`

export default DealTaskPrioritySchema;
