import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DealCountOutputTypeSelectSchema: z.ZodType<Prisma.DealCountOutputTypeSelect> = z.object({
  activities: z.boolean().optional(),
  products: z.boolean().optional(),
  competitors: z.boolean().optional(),
  attachments: z.boolean().optional(),
  tasks: z.boolean().optional(),
  history: z.boolean().optional(),
}).strict();

export default DealCountOutputTypeSelectSchema;
