import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportCreateWithoutSortingsInputSchema } from './ReportCreateWithoutSortingsInputSchema';
import { ReportUncheckedCreateWithoutSortingsInputSchema } from './ReportUncheckedCreateWithoutSortingsInputSchema';

export const ReportCreateOrConnectWithoutSortingsInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutSortingsInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportCreateWithoutSortingsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutSortingsInputSchema) ]),
}).strict();

export default ReportCreateOrConnectWithoutSortingsInputSchema;
