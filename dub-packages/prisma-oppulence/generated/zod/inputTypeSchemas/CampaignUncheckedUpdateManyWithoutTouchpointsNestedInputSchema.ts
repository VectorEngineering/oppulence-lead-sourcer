import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CampaignCreateWithoutTouchpointsInputSchema } from './CampaignCreateWithoutTouchpointsInputSchema';
import { CampaignUncheckedCreateWithoutTouchpointsInputSchema } from './CampaignUncheckedCreateWithoutTouchpointsInputSchema';
import { CampaignCreateOrConnectWithoutTouchpointsInputSchema } from './CampaignCreateOrConnectWithoutTouchpointsInputSchema';
import { CampaignUpsertWithWhereUniqueWithoutTouchpointsInputSchema } from './CampaignUpsertWithWhereUniqueWithoutTouchpointsInputSchema';
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema';
import { CampaignUpdateWithWhereUniqueWithoutTouchpointsInputSchema } from './CampaignUpdateWithWhereUniqueWithoutTouchpointsInputSchema';
import { CampaignUpdateManyWithWhereWithoutTouchpointsInputSchema } from './CampaignUpdateManyWithWhereWithoutTouchpointsInputSchema';
import { CampaignScalarWhereInputSchema } from './CampaignScalarWhereInputSchema';

export const CampaignUncheckedUpdateManyWithoutTouchpointsNestedInputSchema: z.ZodType<Prisma.CampaignUncheckedUpdateManyWithoutTouchpointsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CampaignCreateWithoutTouchpointsInputSchema),z.lazy(() => CampaignCreateWithoutTouchpointsInputSchema).array(),z.lazy(() => CampaignUncheckedCreateWithoutTouchpointsInputSchema),z.lazy(() => CampaignUncheckedCreateWithoutTouchpointsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CampaignCreateOrConnectWithoutTouchpointsInputSchema),z.lazy(() => CampaignCreateOrConnectWithoutTouchpointsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CampaignUpsertWithWhereUniqueWithoutTouchpointsInputSchema),z.lazy(() => CampaignUpsertWithWhereUniqueWithoutTouchpointsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CampaignWhereUniqueInputSchema),z.lazy(() => CampaignWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CampaignWhereUniqueInputSchema),z.lazy(() => CampaignWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CampaignWhereUniqueInputSchema),z.lazy(() => CampaignWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CampaignWhereUniqueInputSchema),z.lazy(() => CampaignWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CampaignUpdateWithWhereUniqueWithoutTouchpointsInputSchema),z.lazy(() => CampaignUpdateWithWhereUniqueWithoutTouchpointsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CampaignUpdateManyWithWhereWithoutTouchpointsInputSchema),z.lazy(() => CampaignUpdateManyWithWhereWithoutTouchpointsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CampaignScalarWhereInputSchema),z.lazy(() => CampaignScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CampaignUncheckedUpdateManyWithoutTouchpointsNestedInputSchema;
