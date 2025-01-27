import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateWithoutHistoryInputSchema } from './DealCreateWithoutHistoryInputSchema';
import { DealUncheckedCreateWithoutHistoryInputSchema } from './DealUncheckedCreateWithoutHistoryInputSchema';
import { DealCreateOrConnectWithoutHistoryInputSchema } from './DealCreateOrConnectWithoutHistoryInputSchema';
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema';

export const DealCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutHistoryInput> = z.object({
  create: z.union([ z.lazy(() => DealCreateWithoutHistoryInputSchema),z.lazy(() => DealUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputSchema).optional()
}).strict();

export default DealCreateNestedOneWithoutHistoryInputSchema;
