import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutCompetitorsInputSchema } from './DealCreateWithoutCompetitorsInputSchema';
import { DealUncheckedCreateWithoutCompetitorsInputSchema } from './DealUncheckedCreateWithoutCompetitorsInputSchema';
import { DealCreateOrConnectWithoutCompetitorsInputSchema } from './DealCreateOrConnectWithoutCompetitorsInputSchema';
import { DealUpsertWithoutCompetitorsInputSchema } from './DealUpsertWithoutCompetitorsInputSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';
import { DealUpdateToOneWithWhereWithoutCompetitorsInputSchema } from './DealUpdateToOneWithWhereWithoutCompetitorsInputSchema';
import { DealUpdateWithoutCompetitorsInputSchema } from './DealUpdateWithoutCompetitorsInputSchema';
import { DealUncheckedUpdateWithoutCompetitorsInputSchema } from './DealUncheckedUpdateWithoutCompetitorsInputSchema';

export const DealUpdateOneRequiredWithoutCompetitorsNestedInputSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutCompetitorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutCompetitorsInputSchema),z.lazy(() => DealUncheckedCreateWithoutCompetitorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutCompetitorsInputSchema).optional(),
  upsert: z.lazy(() => DealUpsertWithoutCompetitorsInputSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DealUpdateToOneWithWhereWithoutCompetitorsInputSchema),z.lazy(() => DealUpdateWithoutCompetitorsInputSchema),z.lazy(() => DealUncheckedUpdateWithoutCompetitorsInputSchema) ]).optional(),
}).strict();

export default DealUpdateOneRequiredWithoutCompetitorsNestedInputSchema;
