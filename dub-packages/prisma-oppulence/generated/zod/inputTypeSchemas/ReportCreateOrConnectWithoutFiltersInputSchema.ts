import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportCreateWithoutFiltersInputSchema } from './ReportCreateWithoutFiltersInputSchema';
import { ReportUncheckedCreateWithoutFiltersInputSchema } from './ReportUncheckedCreateWithoutFiltersInputSchema';

export const ReportCreateOrConnectWithoutFiltersInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutFiltersInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportCreateWithoutFiltersInputSchema),z.lazy(() => ReportUncheckedCreateWithoutFiltersInputSchema) ]),
}).strict();

export default ReportCreateOrConnectWithoutFiltersInputSchema;
