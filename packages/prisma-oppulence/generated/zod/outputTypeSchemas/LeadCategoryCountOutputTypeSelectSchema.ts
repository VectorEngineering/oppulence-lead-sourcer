import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LeadCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadCategoryCountOutputTypeSelect> = z.object({
  leads: z.boolean().optional(),
}).strict();

export default LeadCategoryCountOutputTypeSelectSchema;
