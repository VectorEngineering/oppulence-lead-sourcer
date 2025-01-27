import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignWhereInputSchema } from './CampaignWhereInputSchema';
import { CampaignUpdateWithoutVariantsInputSchema } from './CampaignUpdateWithoutVariantsInputSchema';
import { CampaignUncheckedUpdateWithoutVariantsInputSchema } from './CampaignUncheckedUpdateWithoutVariantsInputSchema';

export const CampaignUpdateToOneWithWhereWithoutVariantsInputSchema: z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutVariantsInput> = z.object({
  where: z.lazy(() => CampaignWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CampaignUpdateWithoutVariantsInputSchema),z.lazy(() => CampaignUncheckedUpdateWithoutVariantsInputSchema) ]),
}).strict();

export default CampaignUpdateToOneWithWhereWithoutVariantsInputSchema;
