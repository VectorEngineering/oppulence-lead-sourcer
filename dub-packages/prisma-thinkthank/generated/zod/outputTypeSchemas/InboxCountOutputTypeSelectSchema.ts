import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const InboxCountOutputTypeSelectSchema: z.ZodType<Prisma.InboxCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
  activities: z.boolean().optional(),
  shares: z.boolean().optional(),
  labels: z.boolean().optional(),
}).strict();

export default InboxCountOutputTypeSelectSchema;
