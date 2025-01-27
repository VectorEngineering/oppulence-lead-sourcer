import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';
import { LeadTouchpointCreateWithoutCampaignInputSchema } from './LeadTouchpointCreateWithoutCampaignInputSchema';
import { LeadTouchpointUncheckedCreateWithoutCampaignInputSchema } from './LeadTouchpointUncheckedCreateWithoutCampaignInputSchema';

export const LeadTouchpointCreateOrConnectWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointCreateOrConnectWithoutCampaignInput> = z.object({
  where: z.lazy(() => LeadTouchpointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadTouchpointCreateWithoutCampaignInputSchema),z.lazy(() => LeadTouchpointUncheckedCreateWithoutCampaignInputSchema) ]),
}).strict();

export default LeadTouchpointCreateOrConnectWithoutCampaignInputSchema;
