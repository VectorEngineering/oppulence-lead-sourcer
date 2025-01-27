import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutColumnsInputSchema } from './ReportCreateWithoutColumnsInputSchema';
import { ReportUncheckedCreateWithoutColumnsInputSchema } from './ReportUncheckedCreateWithoutColumnsInputSchema';
import { ReportCreateOrConnectWithoutColumnsInputSchema } from './ReportCreateOrConnectWithoutColumnsInputSchema';
import { ReportUpsertWithoutColumnsInputSchema } from './ReportUpsertWithoutColumnsInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportUpdateToOneWithWhereWithoutColumnsInputSchema } from './ReportUpdateToOneWithWhereWithoutColumnsInputSchema';
import { ReportUpdateWithoutColumnsInputSchema } from './ReportUpdateWithoutColumnsInputSchema';
import { ReportUncheckedUpdateWithoutColumnsInputSchema } from './ReportUncheckedUpdateWithoutColumnsInputSchema';

export const ReportUpdateOneRequiredWithoutColumnsNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutColumnsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutColumnsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutColumnsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutColumnsInputSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutColumnsInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReportUpdateToOneWithWhereWithoutColumnsInputSchema),z.lazy(() => ReportUpdateWithoutColumnsInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutColumnsInputSchema) ]).optional(),
}).strict();

export default ReportUpdateOneRequiredWithoutColumnsNestedInputSchema;
