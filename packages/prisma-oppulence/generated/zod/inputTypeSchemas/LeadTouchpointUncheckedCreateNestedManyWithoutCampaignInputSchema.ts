import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointCreateWithoutCampaignInputSchema } from './LeadTouchpointCreateWithoutCampaignInputSchema';
import { LeadTouchpointUncheckedCreateWithoutCampaignInputSchema } from './LeadTouchpointUncheckedCreateWithoutCampaignInputSchema';
import { LeadTouchpointCreateOrConnectWithoutCampaignInputSchema } from './LeadTouchpointCreateOrConnectWithoutCampaignInputSchema';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';

export const LeadTouchpointUncheckedCreateNestedManyWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointUncheckedCreateNestedManyWithoutCampaignInput> = z.object({
  create: z.union([ z.lazy(() => LeadTouchpointCreateWithoutCampaignInputSchema),z.lazy(() => LeadTouchpointCreateWithoutCampaignInputSchema).array(),z.lazy(() => LeadTouchpointUncheckedCreateWithoutCampaignInputSchema),z.lazy(() => LeadTouchpointUncheckedCreateWithoutCampaignInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadTouchpointCreateOrConnectWithoutCampaignInputSchema),z.lazy(() => LeadTouchpointCreateOrConnectWithoutCampaignInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadTouchpointWhereUniqueInputSchema),z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadTouchpointUncheckedCreateNestedManyWithoutCampaignInputSchema;
