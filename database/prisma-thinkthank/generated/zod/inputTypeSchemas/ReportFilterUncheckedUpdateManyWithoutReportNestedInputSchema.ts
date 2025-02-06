import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterCreateWithoutReportInputSchema } from './ReportFilterCreateWithoutReportInputSchema';
import { ReportFilterUncheckedCreateWithoutReportInputSchema } from './ReportFilterUncheckedCreateWithoutReportInputSchema';
import { ReportFilterCreateOrConnectWithoutReportInputSchema } from './ReportFilterCreateOrConnectWithoutReportInputSchema';
import { ReportFilterUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportFilterUpsertWithWhereUniqueWithoutReportInputSchema';
import { ReportFilterCreateManyReportInputEnvelopeSchema } from './ReportFilterCreateManyReportInputEnvelopeSchema';
import { ReportFilterWhereUniqueInputSchema } from './ReportFilterWhereUniqueInputSchema';
import { ReportFilterUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportFilterUpdateWithWhereUniqueWithoutReportInputSchema';
import { ReportFilterUpdateManyWithWhereWithoutReportInputSchema } from './ReportFilterUpdateManyWithWhereWithoutReportInputSchema';
import { ReportFilterScalarWhereInputSchema } from './ReportFilterScalarWhereInputSchema';

export const ReportFilterUncheckedUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportFilterUncheckedUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportFilterCreateWithoutReportInputSchema),z.lazy(() => ReportFilterCreateWithoutReportInputSchema).array(),z.lazy(() => ReportFilterUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportFilterUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportFilterCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportFilterCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReportFilterUpsertWithWhereUniqueWithoutReportInputSchema),z.lazy(() => ReportFilterUpsertWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportFilterCreateManyReportInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReportFilterWhereUniqueInputSchema),z.lazy(() => ReportFilterWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReportFilterWhereUniqueInputSchema),z.lazy(() => ReportFilterWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReportFilterWhereUniqueInputSchema),z.lazy(() => ReportFilterWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReportFilterWhereUniqueInputSchema),z.lazy(() => ReportFilterWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReportFilterUpdateWithWhereUniqueWithoutReportInputSchema),z.lazy(() => ReportFilterUpdateWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReportFilterUpdateManyWithWhereWithoutReportInputSchema),z.lazy(() => ReportFilterUpdateManyWithWhereWithoutReportInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReportFilterScalarWhereInputSchema),z.lazy(() => ReportFilterScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReportFilterUncheckedUpdateManyWithoutReportNestedInputSchema;
