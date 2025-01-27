import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadHistorySelectSchema } from '../inputTypeSchemas/LeadHistorySelectSchema';
import { LeadHistoryIncludeSchema } from '../inputTypeSchemas/LeadHistoryIncludeSchema';

export const LeadHistoryArgsSchema: z.ZodType<Prisma.LeadHistoryDefaultArgs> = z.object({
  select: z.lazy(() => LeadHistorySelectSchema).optional(),
  include: z.lazy(() => LeadHistoryIncludeSchema).optional(),
}).strict();

export default LeadHistoryArgsSchema;
