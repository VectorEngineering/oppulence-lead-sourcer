import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompanyDetailsSelectSchema } from '../inputTypeSchemas/LeadCompanyDetailsSelectSchema';
import { LeadCompanyDetailsIncludeSchema } from '../inputTypeSchemas/LeadCompanyDetailsIncludeSchema';

export const LeadCompanyDetailsArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsDefaultArgs> = z.object({
  select: z.lazy(() => LeadCompanyDetailsSelectSchema).optional(),
  include: z.lazy(() => LeadCompanyDetailsIncludeSchema).optional(),
}).strict();

export default LeadCompanyDetailsArgsSchema;
