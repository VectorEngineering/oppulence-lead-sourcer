import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCategorySelectSchema } from '../inputTypeSchemas/LeadCategorySelectSchema';
import { LeadCategoryIncludeSchema } from '../inputTypeSchemas/LeadCategoryIncludeSchema';

export const LeadCategoryArgsSchema: z.ZodType<Prisma.LeadCategoryDefaultArgs> = z.object({
  select: z.lazy(() => LeadCategorySelectSchema).optional(),
  include: z.lazy(() => LeadCategoryIncludeSchema).optional(),
}).strict();

export default LeadCategoryArgsSchema;
