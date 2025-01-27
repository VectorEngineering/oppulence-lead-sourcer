import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutCampaignInputSchema } from './LeadUpdateWithoutCampaignInputSchema';
import { LeadUncheckedUpdateWithoutCampaignInputSchema } from './LeadUncheckedUpdateWithoutCampaignInputSchema';

export const LeadUpdateWithWhereUniqueWithoutCampaignInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutCampaignInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateWithoutCampaignInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCampaignInputSchema) ]),
}).strict();

export default LeadUpdateWithWhereUniqueWithoutCampaignInputSchema;
