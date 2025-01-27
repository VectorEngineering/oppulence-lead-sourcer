import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSocialProfileSelectSchema } from '../inputTypeSchemas/LeadSocialProfileSelectSchema';
import { LeadSocialProfileIncludeSchema } from '../inputTypeSchemas/LeadSocialProfileIncludeSchema';

export const LeadSocialProfileArgsSchema: z.ZodType<Prisma.LeadSocialProfileDefaultArgs> = z.object({
  select: z.lazy(() => LeadSocialProfileSelectSchema).optional(),
  include: z.lazy(() => LeadSocialProfileIncludeSchema).optional(),
}).strict();

export default LeadSocialProfileArgsSchema;
