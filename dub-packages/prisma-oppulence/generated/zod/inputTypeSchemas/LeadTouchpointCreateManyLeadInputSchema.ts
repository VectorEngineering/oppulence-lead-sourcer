import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadTouchpointCreateManyLeadInputSchema: z.ZodType<Prisma.LeadTouchpointCreateManyLeadInput> = z.object({
  id: z.string().cuid().optional(),
  channel: z.string(),
  campaign: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  interaction: z.string().optional().nullable(),
  timestamp: z.coerce.date(),
  isFirstTouch: z.boolean(),
  isLastTouch: z.boolean()
}).strict();

export default LeadTouchpointCreateManyLeadInputSchema;
