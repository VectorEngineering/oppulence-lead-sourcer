import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema';
import { CampaignUpdateWithoutTouchpointsInputSchema } from './CampaignUpdateWithoutTouchpointsInputSchema';
import { CampaignUncheckedUpdateWithoutTouchpointsInputSchema } from './CampaignUncheckedUpdateWithoutTouchpointsInputSchema';

export const CampaignUpdateWithWhereUniqueWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignUpdateWithWhereUniqueWithoutTouchpointsInput> = z.object({
  where: z.lazy(() => CampaignWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CampaignUpdateWithoutTouchpointsInputSchema),z.lazy(() => CampaignUncheckedUpdateWithoutTouchpointsInputSchema) ]),
}).strict();

export default CampaignUpdateWithWhereUniqueWithoutTouchpointsInputSchema;
