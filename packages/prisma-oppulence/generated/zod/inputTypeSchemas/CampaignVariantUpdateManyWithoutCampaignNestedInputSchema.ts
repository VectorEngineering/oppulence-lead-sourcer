import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignVariantCreateWithoutCampaignInputSchema } from './CampaignVariantCreateWithoutCampaignInputSchema';
import { CampaignVariantUncheckedCreateWithoutCampaignInputSchema } from './CampaignVariantUncheckedCreateWithoutCampaignInputSchema';
import { CampaignVariantCreateOrConnectWithoutCampaignInputSchema } from './CampaignVariantCreateOrConnectWithoutCampaignInputSchema';
import { CampaignVariantUpsertWithWhereUniqueWithoutCampaignInputSchema } from './CampaignVariantUpsertWithWhereUniqueWithoutCampaignInputSchema';
import { CampaignVariantCreateManyCampaignInputEnvelopeSchema } from './CampaignVariantCreateManyCampaignInputEnvelopeSchema';
import { CampaignVariantWhereUniqueInputSchema } from './CampaignVariantWhereUniqueInputSchema';
import { CampaignVariantUpdateWithWhereUniqueWithoutCampaignInputSchema } from './CampaignVariantUpdateWithWhereUniqueWithoutCampaignInputSchema';
import { CampaignVariantUpdateManyWithWhereWithoutCampaignInputSchema } from './CampaignVariantUpdateManyWithWhereWithoutCampaignInputSchema';
import { CampaignVariantScalarWhereInputSchema } from './CampaignVariantScalarWhereInputSchema';

export const CampaignVariantUpdateManyWithoutCampaignNestedInputSchema: z.ZodType<Prisma.CampaignVariantUpdateManyWithoutCampaignNestedInput> = z.object({
  create: z.union([ z.lazy(() => CampaignVariantCreateWithoutCampaignInputSchema),z.lazy(() => CampaignVariantCreateWithoutCampaignInputSchema).array(),z.lazy(() => CampaignVariantUncheckedCreateWithoutCampaignInputSchema),z.lazy(() => CampaignVariantUncheckedCreateWithoutCampaignInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CampaignVariantCreateOrConnectWithoutCampaignInputSchema),z.lazy(() => CampaignVariantCreateOrConnectWithoutCampaignInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CampaignVariantUpsertWithWhereUniqueWithoutCampaignInputSchema),z.lazy(() => CampaignVariantUpsertWithWhereUniqueWithoutCampaignInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CampaignVariantCreateManyCampaignInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CampaignVariantWhereUniqueInputSchema),z.lazy(() => CampaignVariantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CampaignVariantWhereUniqueInputSchema),z.lazy(() => CampaignVariantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CampaignVariantWhereUniqueInputSchema),z.lazy(() => CampaignVariantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CampaignVariantWhereUniqueInputSchema),z.lazy(() => CampaignVariantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CampaignVariantUpdateWithWhereUniqueWithoutCampaignInputSchema),z.lazy(() => CampaignVariantUpdateWithWhereUniqueWithoutCampaignInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CampaignVariantUpdateManyWithWhereWithoutCampaignInputSchema),z.lazy(() => CampaignVariantUpdateManyWithWhereWithoutCampaignInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CampaignVariantScalarWhereInputSchema),z.lazy(() => CampaignVariantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CampaignVariantUpdateManyWithoutCampaignNestedInputSchema;
