import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema';
import { CampaignUpdateWithoutLeadsInputSchema } from './CampaignUpdateWithoutLeadsInputSchema';
import { CampaignUncheckedUpdateWithoutLeadsInputSchema } from './CampaignUncheckedUpdateWithoutLeadsInputSchema';

export const CampaignUpdateWithWhereUniqueWithoutLeadsInputSchema: z.ZodType<Prisma.CampaignUpdateWithWhereUniqueWithoutLeadsInput> = z.object({
  where: z.lazy(() => CampaignWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CampaignUpdateWithoutLeadsInputSchema),z.lazy(() => CampaignUncheckedUpdateWithoutLeadsInputSchema) ]),
}).strict();

export default CampaignUpdateWithWhereUniqueWithoutLeadsInputSchema;
