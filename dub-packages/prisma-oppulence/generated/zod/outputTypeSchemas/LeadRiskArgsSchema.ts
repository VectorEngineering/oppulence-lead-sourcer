import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRiskSelectSchema } from '../inputTypeSchemas/LeadRiskSelectSchema';
import { LeadRiskIncludeSchema } from '../inputTypeSchemas/LeadRiskIncludeSchema';

export const LeadRiskArgsSchema: z.ZodType<Prisma.LeadRiskDefaultArgs> = z.object({
  select: z.lazy(() => LeadRiskSelectSchema).optional(),
  include: z.lazy(() => LeadRiskIncludeSchema).optional(),
}).strict();

export default LeadRiskArgsSchema;
