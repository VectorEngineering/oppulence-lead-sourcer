import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadPersonalDetailsSelectSchema } from '../inputTypeSchemas/LeadPersonalDetailsSelectSchema';
import { LeadPersonalDetailsIncludeSchema } from '../inputTypeSchemas/LeadPersonalDetailsIncludeSchema';

export const LeadPersonalDetailsArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsDefaultArgs> = z.object({
  select: z.lazy(() => LeadPersonalDetailsSelectSchema).optional(),
  include: z.lazy(() => LeadPersonalDetailsIncludeSchema).optional(),
}).strict();

export default LeadPersonalDetailsArgsSchema;
