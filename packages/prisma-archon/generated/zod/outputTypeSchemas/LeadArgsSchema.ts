import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSelectSchema } from '../inputTypeSchemas/LeadSelectSchema';
import { LeadIncludeSchema } from '../inputTypeSchemas/LeadIncludeSchema';

export const LeadArgsSchema: z.ZodType<Prisma.LeadDefaultArgs> = z.object({
  select: z.lazy(() => LeadSelectSchema).optional(),
  include: z.lazy(() => LeadIncludeSchema).optional(),
}).strict();

export default LeadArgsSchema;
