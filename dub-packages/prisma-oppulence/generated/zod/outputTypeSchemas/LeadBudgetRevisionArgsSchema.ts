import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetRevisionSelectSchema } from '../inputTypeSchemas/LeadBudgetRevisionSelectSchema';
import { LeadBudgetRevisionIncludeSchema } from '../inputTypeSchemas/LeadBudgetRevisionIncludeSchema';

export const LeadBudgetRevisionArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionDefaultArgs> = z.object({
  select: z.lazy(() => LeadBudgetRevisionSelectSchema).optional(),
  include: z.lazy(() => LeadBudgetRevisionIncludeSchema).optional(),
}).strict();

export default LeadBudgetRevisionArgsSchema;
