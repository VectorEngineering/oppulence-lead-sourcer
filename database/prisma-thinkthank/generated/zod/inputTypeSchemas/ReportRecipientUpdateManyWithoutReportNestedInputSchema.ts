import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportRecipientCreateWithoutReportInputSchema } from './ReportRecipientCreateWithoutReportInputSchema';
import { ReportRecipientUncheckedCreateWithoutReportInputSchema } from './ReportRecipientUncheckedCreateWithoutReportInputSchema';
import { ReportRecipientCreateOrConnectWithoutReportInputSchema } from './ReportRecipientCreateOrConnectWithoutReportInputSchema';
import { ReportRecipientUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportRecipientUpsertWithWhereUniqueWithoutReportInputSchema';
import { ReportRecipientCreateManyReportInputEnvelopeSchema } from './ReportRecipientCreateManyReportInputEnvelopeSchema';
import { ReportRecipientWhereUniqueInputSchema } from './ReportRecipientWhereUniqueInputSchema';
import { ReportRecipientUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportRecipientUpdateWithWhereUniqueWithoutReportInputSchema';
import { ReportRecipientUpdateManyWithWhereWithoutReportInputSchema } from './ReportRecipientUpdateManyWithWhereWithoutReportInputSchema';
import { ReportRecipientScalarWhereInputSchema } from './ReportRecipientScalarWhereInputSchema';

export const ReportRecipientUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportRecipientUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportRecipientCreateWithoutReportInputSchema),z.lazy(() => ReportRecipientCreateWithoutReportInputSchema).array(),z.lazy(() => ReportRecipientUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportRecipientUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportRecipientCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportRecipientCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReportRecipientUpsertWithWhereUniqueWithoutReportInputSchema),z.lazy(() => ReportRecipientUpsertWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportRecipientCreateManyReportInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReportRecipientWhereUniqueInputSchema),z.lazy(() => ReportRecipientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReportRecipientWhereUniqueInputSchema),z.lazy(() => ReportRecipientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReportRecipientWhereUniqueInputSchema),z.lazy(() => ReportRecipientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReportRecipientWhereUniqueInputSchema),z.lazy(() => ReportRecipientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReportRecipientUpdateWithWhereUniqueWithoutReportInputSchema),z.lazy(() => ReportRecipientUpdateWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReportRecipientUpdateManyWithWhereWithoutReportInputSchema),z.lazy(() => ReportRecipientUpdateManyWithWhereWithoutReportInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReportRecipientScalarWhereInputSchema),z.lazy(() => ReportRecipientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReportRecipientUpdateManyWithoutReportNestedInputSchema;
