import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutTouchpointsInputSchema } from './LeadCreateWithoutTouchpointsInputSchema';
import { LeadUncheckedCreateWithoutTouchpointsInputSchema } from './LeadUncheckedCreateWithoutTouchpointsInputSchema';
import { LeadCreateOrConnectWithoutTouchpointsInputSchema } from './LeadCreateOrConnectWithoutTouchpointsInputSchema';
import { LeadUpsertWithoutTouchpointsInputSchema } from './LeadUpsertWithoutTouchpointsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutTouchpointsInputSchema } from './LeadUpdateToOneWithWhereWithoutTouchpointsInputSchema';
import { LeadUpdateWithoutTouchpointsInputSchema } from './LeadUpdateWithoutTouchpointsInputSchema';
import { LeadUncheckedUpdateWithoutTouchpointsInputSchema } from './LeadUncheckedUpdateWithoutTouchpointsInputSchema';

export const LeadUpdateOneRequiredWithoutTouchpointsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutTouchpointsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutTouchpointsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutTouchpointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutTouchpointsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutTouchpointsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutTouchpointsInputSchema),z.lazy(() => LeadUpdateWithoutTouchpointsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutTouchpointsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutTouchpointsNestedInputSchema;
