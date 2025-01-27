import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutCampaignInputSchema } from './LeadUpdateWithoutCampaignInputSchema';
import { LeadUncheckedUpdateWithoutCampaignInputSchema } from './LeadUncheckedUpdateWithoutCampaignInputSchema';
import { LeadCreateWithoutCampaignInputSchema } from './LeadCreateWithoutCampaignInputSchema';
import { LeadUncheckedCreateWithoutCampaignInputSchema } from './LeadUncheckedCreateWithoutCampaignInputSchema';

export const LeadUpsertWithWhereUniqueWithoutCampaignInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutCampaignInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadUpdateWithoutCampaignInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCampaignInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutCampaignInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCampaignInputSchema) ]),
}).strict();

export default LeadUpsertWithWhereUniqueWithoutCampaignInputSchema;
