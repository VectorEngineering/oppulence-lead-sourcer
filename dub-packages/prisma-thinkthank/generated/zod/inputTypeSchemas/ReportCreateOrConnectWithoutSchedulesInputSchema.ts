import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportCreateWithoutSchedulesInputSchema } from './ReportCreateWithoutSchedulesInputSchema';
import { ReportUncheckedCreateWithoutSchedulesInputSchema } from './ReportUncheckedCreateWithoutSchedulesInputSchema';

export const ReportCreateOrConnectWithoutSchedulesInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutSchedulesInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportCreateWithoutSchedulesInputSchema),z.lazy(() => ReportUncheckedCreateWithoutSchedulesInputSchema) ]),
}).strict();

export default ReportCreateOrConnectWithoutSchedulesInputSchema;
