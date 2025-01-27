import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';
import { LeadTouchpointUpdateWithoutCampaignInputSchema } from './LeadTouchpointUpdateWithoutCampaignInputSchema';
import { LeadTouchpointUncheckedUpdateWithoutCampaignInputSchema } from './LeadTouchpointUncheckedUpdateWithoutCampaignInputSchema';

export const LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInput> = z.object({
  where: z.lazy(() => LeadTouchpointWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadTouchpointUpdateWithoutCampaignInputSchema),z.lazy(() => LeadTouchpointUncheckedUpdateWithoutCampaignInputSchema) ]),
}).strict();

export default LeadTouchpointUpdateWithWhereUniqueWithoutCampaignInputSchema;
