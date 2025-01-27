import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerCreateWithoutPayoutsInputSchema } from './PartnerCreateWithoutPayoutsInputSchema';
import { PartnerUncheckedCreateWithoutPayoutsInputSchema } from './PartnerUncheckedCreateWithoutPayoutsInputSchema';
import { PartnerCreateOrConnectWithoutPayoutsInputSchema } from './PartnerCreateOrConnectWithoutPayoutsInputSchema';
import { PartnerUpsertWithoutPayoutsInputSchema } from './PartnerUpsertWithoutPayoutsInputSchema';
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema';
import { PartnerUpdateToOneWithWhereWithoutPayoutsInputSchema } from './PartnerUpdateToOneWithWhereWithoutPayoutsInputSchema';
import { PartnerUpdateWithoutPayoutsInputSchema } from './PartnerUpdateWithoutPayoutsInputSchema';
import { PartnerUncheckedUpdateWithoutPayoutsInputSchema } from './PartnerUncheckedUpdateWithoutPayoutsInputSchema';

export const PartnerUpdateOneRequiredWithoutPayoutsNestedInputSchema: z.ZodType<Prisma.PartnerUpdateOneRequiredWithoutPayoutsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PartnerCreateWithoutPayoutsInputSchema),z.lazy(() => PartnerUncheckedCreateWithoutPayoutsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutPayoutsInputSchema).optional(),
  upsert: z.lazy(() => PartnerUpsertWithoutPayoutsInputSchema).optional(),
  connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PartnerUpdateToOneWithWhereWithoutPayoutsInputSchema),z.lazy(() => PartnerUpdateWithoutPayoutsInputSchema),z.lazy(() => PartnerUncheckedUpdateWithoutPayoutsInputSchema) ]).optional(),
}).strict();

export default PartnerUpdateOneRequiredWithoutPayoutsNestedInputSchema;
