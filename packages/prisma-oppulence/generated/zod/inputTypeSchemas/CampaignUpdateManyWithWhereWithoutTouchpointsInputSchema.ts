import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignScalarWhereInputSchema } from './CampaignScalarWhereInputSchema';
import { CampaignUpdateManyMutationInputSchema } from './CampaignUpdateManyMutationInputSchema';
import { CampaignUncheckedUpdateManyWithoutTouchpointsInputSchema } from './CampaignUncheckedUpdateManyWithoutTouchpointsInputSchema';

export const CampaignUpdateManyWithWhereWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignUpdateManyWithWhereWithoutTouchpointsInput> = z.object({
  where: z.lazy(() => CampaignScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CampaignUpdateManyMutationInputSchema),z.lazy(() => CampaignUncheckedUpdateManyWithoutTouchpointsInputSchema) ]),
}).strict();

export default CampaignUpdateManyWithWhereWithoutTouchpointsInputSchema;
