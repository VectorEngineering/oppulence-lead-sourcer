import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutColumnsInputSchema } from './ReportCreateWithoutColumnsInputSchema';
import { ReportUncheckedCreateWithoutColumnsInputSchema } from './ReportUncheckedCreateWithoutColumnsInputSchema';
import { ReportCreateOrConnectWithoutColumnsInputSchema } from './ReportCreateOrConnectWithoutColumnsInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';

export const ReportCreateNestedOneWithoutColumnsInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutColumnsInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutColumnsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutColumnsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutColumnsInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
}).strict();

export default ReportCreateNestedOneWithoutColumnsInputSchema;
