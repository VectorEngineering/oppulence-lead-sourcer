import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LeadScoreCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadScoreCountOutputTypeSelect> = z.object({
  scoreHistory: z.boolean().optional(),
}).strict();

export default LeadScoreCountOutputTypeSelectSchema;
