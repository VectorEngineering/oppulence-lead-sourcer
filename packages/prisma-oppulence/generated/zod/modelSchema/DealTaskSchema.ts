import { z } from 'zod';
import { DealTaskPrioritySchema } from '../inputTypeSchemas/DealTaskPrioritySchema'
import { DealTaskStatusSchema } from '../inputTypeSchemas/DealTaskStatusSchema'

/////////////////////////////////////////
// DEAL TASK SCHEMA
/////////////////////////////////////////

export const DealTaskSchema = z.object({
  priority: DealTaskPrioritySchema,
  status: DealTaskStatusSchema,
  id: z.string().cuid(),
  dealId: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  dueDate: z.coerce.date().nullish(),
  completedAt: z.coerce.date().nullish(),
  assignedToId: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DealTask = z.infer<typeof DealTaskSchema>

/////////////////////////////////////////
// DEAL TASK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DealTaskOptionalDefaultsSchema = DealTaskSchema.merge(z.object({
  priority: DealTaskPrioritySchema.optional(),
  status: DealTaskStatusSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DealTaskOptionalDefaults = z.infer<typeof DealTaskOptionalDefaultsSchema>

export default DealTaskSchema;
