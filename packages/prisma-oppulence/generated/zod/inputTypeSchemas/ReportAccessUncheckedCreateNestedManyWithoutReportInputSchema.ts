import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportAccessCreateWithoutReportInputSchema } from './ReportAccessCreateWithoutReportInputSchema';
import { ReportAccessUncheckedCreateWithoutReportInputSchema } from './ReportAccessUncheckedCreateWithoutReportInputSchema';
import { ReportAccessCreateOrConnectWithoutReportInputSchema } from './ReportAccessCreateOrConnectWithoutReportInputSchema';
import { ReportAccessCreateManyReportInputEnvelopeSchema } from './ReportAccessCreateManyReportInputEnvelopeSchema';
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema';

export const ReportAccessUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUncheckedCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([ z.lazy(() => ReportAccessCreateWithoutReportInputSchema),z.lazy(() => ReportAccessCreateWithoutReportInputSchema).array(),z.lazy(() => ReportAccessUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportAccessUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportAccessCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportAccessCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportAccessCreateManyReportInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReportAccessWhereUniqueInputSchema),z.lazy(() => ReportAccessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReportAccessUncheckedCreateNestedManyWithoutReportInputSchema;
