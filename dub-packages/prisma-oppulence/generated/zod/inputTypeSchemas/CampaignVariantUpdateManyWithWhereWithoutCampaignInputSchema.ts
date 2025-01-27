import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignVariantScalarWhereInputSchema } from './CampaignVariantScalarWhereInputSchema';
import { CampaignVariantUpdateManyMutationInputSchema } from './CampaignVariantUpdateManyMutationInputSchema';
import { CampaignVariantUncheckedUpdateManyWithoutCampaignInputSchema } from './CampaignVariantUncheckedUpdateManyWithoutCampaignInputSchema';

export const CampaignVariantUpdateManyWithWhereWithoutCampaignInputSchema: z.ZodType<Prisma.CampaignVariantUpdateManyWithWhereWithoutCampaignInput> = z.object({
  where: z.lazy(() => CampaignVariantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CampaignVariantUpdateManyMutationInputSchema),z.lazy(() => CampaignVariantUncheckedUpdateManyWithoutCampaignInputSchema) ]),
}).strict();

export default CampaignVariantUpdateManyWithWhereWithoutCampaignInputSchema;
