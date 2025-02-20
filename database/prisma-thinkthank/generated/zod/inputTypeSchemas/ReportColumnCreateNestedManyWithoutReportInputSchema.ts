import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportColumnCreateWithoutReportInputSchema } from './ReportColumnCreateWithoutReportInputSchema';
import { ReportColumnUncheckedCreateWithoutReportInputSchema } from './ReportColumnUncheckedCreateWithoutReportInputSchema';
import { ReportColumnCreateOrConnectWithoutReportInputSchema } from './ReportColumnCreateOrConnectWithoutReportInputSchema';
import { ReportColumnCreateManyReportInputEnvelopeSchema } from './ReportColumnCreateManyReportInputEnvelopeSchema';
import { ReportColumnWhereUniqueInputSchema } from './ReportColumnWhereUniqueInputSchema';

export const ReportColumnCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportColumnCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([ z.lazy(() => ReportColumnCreateWithoutReportInputSchema),z.lazy(() => ReportColumnCreateWithoutReportInputSchema).array(),z.lazy(() => ReportColumnUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportColumnUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportColumnCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportColumnCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportColumnCreateManyReportInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReportColumnWhereUniqueInputSchema),z.lazy(() => ReportColumnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReportColumnCreateNestedManyWithoutReportInputSchema;
