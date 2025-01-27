import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadRequirementSelectSchema } from '../inputTypeSchemas/LeadRequirementSelectSchema';
import { LeadRequirementIncludeSchema } from '../inputTypeSchemas/LeadRequirementIncludeSchema';

export const LeadRequirementArgsSchema: z.ZodType<Prisma.LeadRequirementDefaultArgs> = z.object({
  select: z.lazy(() => LeadRequirementSelectSchema).optional(),
  include: z.lazy(() => LeadRequirementIncludeSchema).optional(),
}).strict();

export default LeadRequirementArgsSchema;
