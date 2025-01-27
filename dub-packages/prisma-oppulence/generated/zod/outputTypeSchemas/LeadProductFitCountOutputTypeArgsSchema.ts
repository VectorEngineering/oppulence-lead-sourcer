import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitCountOutputTypeSelectSchema } from './LeadProductFitCountOutputTypeSelectSchema';

export const LeadProductFitCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadProductFitCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LeadProductFitCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LeadProductFitCountOutputTypeSelectSchema;
