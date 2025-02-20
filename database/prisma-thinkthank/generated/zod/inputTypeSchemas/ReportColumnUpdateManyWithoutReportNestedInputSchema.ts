import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportColumnCreateWithoutReportInputSchema } from './ReportColumnCreateWithoutReportInputSchema';
import { ReportColumnUncheckedCreateWithoutReportInputSchema } from './ReportColumnUncheckedCreateWithoutReportInputSchema';
import { ReportColumnCreateOrConnectWithoutReportInputSchema } from './ReportColumnCreateOrConnectWithoutReportInputSchema';
import { ReportColumnUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportColumnUpsertWithWhereUniqueWithoutReportInputSchema';
import { ReportColumnCreateManyReportInputEnvelopeSchema } from './ReportColumnCreateManyReportInputEnvelopeSchema';
import { ReportColumnWhereUniqueInputSchema } from './ReportColumnWhereUniqueInputSchema';
import { ReportColumnUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportColumnUpdateWithWhereUniqueWithoutReportInputSchema';
import { ReportColumnUpdateManyWithWhereWithoutReportInputSchema } from './ReportColumnUpdateManyWithWhereWithoutReportInputSchema';
import { ReportColumnScalarWhereInputSchema } from './ReportColumnScalarWhereInputSchema';

export const ReportColumnUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportColumnUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportColumnCreateWithoutReportInputSchema),z.lazy(() => ReportColumnCreateWithoutReportInputSchema).array(),z.lazy(() => ReportColumnUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportColumnUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportColumnCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportColumnCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReportColumnUpsertWithWhereUniqueWithoutReportInputSchema),z.lazy(() => ReportColumnUpsertWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportColumnCreateManyReportInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReportColumnWhereUniqueInputSchema),z.lazy(() => ReportColumnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReportColumnWhereUniqueInputSchema),z.lazy(() => ReportColumnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReportColumnWhereUniqueInputSchema),z.lazy(() => ReportColumnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReportColumnWhereUniqueInputSchema),z.lazy(() => ReportColumnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReportColumnUpdateWithWhereUniqueWithoutReportInputSchema),z.lazy(() => ReportColumnUpdateWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReportColumnUpdateManyWithWhereWithoutReportInputSchema),z.lazy(() => ReportColumnUpdateManyWithWhereWithoutReportInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReportColumnScalarWhereInputSchema),z.lazy(() => ReportColumnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReportColumnUpdateManyWithoutReportNestedInputSchema;
