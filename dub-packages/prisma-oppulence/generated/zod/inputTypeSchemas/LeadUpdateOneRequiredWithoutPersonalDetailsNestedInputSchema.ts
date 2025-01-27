import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutPersonalDetailsInputSchema } from './LeadCreateWithoutPersonalDetailsInputSchema';
import { LeadUncheckedCreateWithoutPersonalDetailsInputSchema } from './LeadUncheckedCreateWithoutPersonalDetailsInputSchema';
import { LeadCreateOrConnectWithoutPersonalDetailsInputSchema } from './LeadCreateOrConnectWithoutPersonalDetailsInputSchema';
import { LeadUpsertWithoutPersonalDetailsInputSchema } from './LeadUpsertWithoutPersonalDetailsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutPersonalDetailsInputSchema } from './LeadUpdateToOneWithWhereWithoutPersonalDetailsInputSchema';
import { LeadUpdateWithoutPersonalDetailsInputSchema } from './LeadUpdateWithoutPersonalDetailsInputSchema';
import { LeadUncheckedUpdateWithoutPersonalDetailsInputSchema } from './LeadUncheckedUpdateWithoutPersonalDetailsInputSchema';

export const LeadUpdateOneRequiredWithoutPersonalDetailsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutPersonalDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutPersonalDetailsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutPersonalDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutPersonalDetailsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutPersonalDetailsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutPersonalDetailsInputSchema),z.lazy(() => LeadUpdateWithoutPersonalDetailsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutPersonalDetailsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutPersonalDetailsNestedInputSchema;
