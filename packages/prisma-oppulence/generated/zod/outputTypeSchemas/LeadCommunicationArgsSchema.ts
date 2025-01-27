import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommunicationSelectSchema } from '../inputTypeSchemas/LeadCommunicationSelectSchema';
import { LeadCommunicationIncludeSchema } from '../inputTypeSchemas/LeadCommunicationIncludeSchema';

export const LeadCommunicationArgsSchema: z.ZodType<Prisma.LeadCommunicationDefaultArgs> = z.object({
  select: z.lazy(() => LeadCommunicationSelectSchema).optional(),
  include: z.lazy(() => LeadCommunicationIncludeSchema).optional(),
}).strict();

export default LeadCommunicationArgsSchema;
