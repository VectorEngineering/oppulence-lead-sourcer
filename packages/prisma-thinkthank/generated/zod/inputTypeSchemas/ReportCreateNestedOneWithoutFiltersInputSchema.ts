import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutFiltersInputSchema } from './ReportCreateWithoutFiltersInputSchema';
import { ReportUncheckedCreateWithoutFiltersInputSchema } from './ReportUncheckedCreateWithoutFiltersInputSchema';
import { ReportCreateOrConnectWithoutFiltersInputSchema } from './ReportCreateOrConnectWithoutFiltersInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';

export const ReportCreateNestedOneWithoutFiltersInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutFiltersInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutFiltersInputSchema),z.lazy(() => ReportUncheckedCreateWithoutFiltersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutFiltersInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
}).strict();

export default ReportCreateNestedOneWithoutFiltersInputSchema;
