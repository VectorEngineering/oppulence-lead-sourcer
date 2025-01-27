import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreCountOutputTypeSelectSchema } from './LeadScoreCountOutputTypeSelectSchema';

export const LeadScoreCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadScoreCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LeadScoreCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LeadScoreCountOutputTypeSelectSchema;
