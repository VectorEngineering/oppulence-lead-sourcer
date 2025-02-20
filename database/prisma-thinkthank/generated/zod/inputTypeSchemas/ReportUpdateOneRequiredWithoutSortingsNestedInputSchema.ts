import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutSortingsInputSchema } from './ReportCreateWithoutSortingsInputSchema';
import { ReportUncheckedCreateWithoutSortingsInputSchema } from './ReportUncheckedCreateWithoutSortingsInputSchema';
import { ReportCreateOrConnectWithoutSortingsInputSchema } from './ReportCreateOrConnectWithoutSortingsInputSchema';
import { ReportUpsertWithoutSortingsInputSchema } from './ReportUpsertWithoutSortingsInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportUpdateToOneWithWhereWithoutSortingsInputSchema } from './ReportUpdateToOneWithWhereWithoutSortingsInputSchema';
import { ReportUpdateWithoutSortingsInputSchema } from './ReportUpdateWithoutSortingsInputSchema';
import { ReportUncheckedUpdateWithoutSortingsInputSchema } from './ReportUncheckedUpdateWithoutSortingsInputSchema';

export const ReportUpdateOneRequiredWithoutSortingsNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutSortingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutSortingsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutSortingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutSortingsInputSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutSortingsInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReportUpdateToOneWithWhereWithoutSortingsInputSchema),z.lazy(() => ReportUpdateWithoutSortingsInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutSortingsInputSchema) ]).optional(),
}).strict();

export default ReportUpdateOneRequiredWithoutSortingsNestedInputSchema;
