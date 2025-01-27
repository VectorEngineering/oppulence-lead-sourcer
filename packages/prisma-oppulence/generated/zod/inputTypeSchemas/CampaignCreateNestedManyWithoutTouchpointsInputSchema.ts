import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignCreateWithoutTouchpointsInputSchema } from './CampaignCreateWithoutTouchpointsInputSchema';
import { CampaignUncheckedCreateWithoutTouchpointsInputSchema } from './CampaignUncheckedCreateWithoutTouchpointsInputSchema';
import { CampaignCreateOrConnectWithoutTouchpointsInputSchema } from './CampaignCreateOrConnectWithoutTouchpointsInputSchema';
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema';

export const CampaignCreateNestedManyWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignCreateNestedManyWithoutTouchpointsInput> = z.object({
  create: z.union([ z.lazy(() => CampaignCreateWithoutTouchpointsInputSchema),z.lazy(() => CampaignCreateWithoutTouchpointsInputSchema).array(),z.lazy(() => CampaignUncheckedCreateWithoutTouchpointsInputSchema),z.lazy(() => CampaignUncheckedCreateWithoutTouchpointsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CampaignCreateOrConnectWithoutTouchpointsInputSchema),z.lazy(() => CampaignCreateOrConnectWithoutTouchpointsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CampaignWhereUniqueInputSchema),z.lazy(() => CampaignWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CampaignCreateNestedManyWithoutTouchpointsInputSchema;
