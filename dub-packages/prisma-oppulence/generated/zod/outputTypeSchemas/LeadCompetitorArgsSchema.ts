import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitorSelectSchema } from '../inputTypeSchemas/LeadCompetitorSelectSchema';
import { LeadCompetitorIncludeSchema } from '../inputTypeSchemas/LeadCompetitorIncludeSchema';

export const LeadCompetitorArgsSchema: z.ZodType<Prisma.LeadCompetitorDefaultArgs> = z.object({
  select: z.lazy(() => LeadCompetitorSelectSchema).optional(),
  include: z.lazy(() => LeadCompetitorIncludeSchema).optional(),
}).strict();

export default LeadCompetitorArgsSchema;
