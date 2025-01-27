import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema';
import { CampaignUpdateWithoutLeadsInputSchema } from './CampaignUpdateWithoutLeadsInputSchema';
import { CampaignUncheckedUpdateWithoutLeadsInputSchema } from './CampaignUncheckedUpdateWithoutLeadsInputSchema';
import { CampaignCreateWithoutLeadsInputSchema } from './CampaignCreateWithoutLeadsInputSchema';
import { CampaignUncheckedCreateWithoutLeadsInputSchema } from './CampaignUncheckedCreateWithoutLeadsInputSchema';

export const CampaignUpsertWithWhereUniqueWithoutLeadsInputSchema: z.ZodType<Prisma.CampaignUpsertWithWhereUniqueWithoutLeadsInput> = z.object({
  where: z.lazy(() => CampaignWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CampaignUpdateWithoutLeadsInputSchema),z.lazy(() => CampaignUncheckedUpdateWithoutLeadsInputSchema) ]),
  create: z.union([ z.lazy(() => CampaignCreateWithoutLeadsInputSchema),z.lazy(() => CampaignUncheckedCreateWithoutLeadsInputSchema) ]),
}).strict();

export default CampaignUpsertWithWhereUniqueWithoutLeadsInputSchema;
