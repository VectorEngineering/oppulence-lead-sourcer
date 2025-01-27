import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignCreateNestedManyWithoutTouchpointsInputSchema } from './CampaignCreateNestedManyWithoutTouchpointsInputSchema';

export const LeadTouchpointCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  channel: z.string(),
  campaign: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  interaction: z.string().optional().nullable(),
  timestamp: z.coerce.date(),
  isFirstTouch: z.boolean(),
  isLastTouch: z.boolean(),
  Campaign: z.lazy(() => CampaignCreateNestedManyWithoutTouchpointsInputSchema).optional()
}).strict();

export default LeadTouchpointCreateWithoutLeadInputSchema;
