import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutCompetitorsInputSchema } from './DealCreateWithoutCompetitorsInputSchema';
import { DealUncheckedCreateWithoutCompetitorsInputSchema } from './DealUncheckedCreateWithoutCompetitorsInputSchema';
import { DealCreateOrConnectWithoutCompetitorsInputSchema } from './DealCreateOrConnectWithoutCompetitorsInputSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealCreateNestedOneWithoutCompetitorsInputSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutCompetitorsInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutCompetitorsInputSchema),z.lazy(() => DealUncheckedCreateWithoutCompetitorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutCompetitorsInputSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputSchema).optional()
}).strict();

export default DealCreateNestedOneWithoutCompetitorsInputSchema;
