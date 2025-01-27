import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportCreateWithoutCreatorInputSchema } from './ReportCreateWithoutCreatorInputSchema';
import { ReportUncheckedCreateWithoutCreatorInputSchema } from './ReportUncheckedCreateWithoutCreatorInputSchema';

export const ReportCreateOrConnectWithoutCreatorInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCreatorInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportCreateWithoutCreatorInputSchema),z.lazy(() => ReportUncheckedCreateWithoutCreatorInputSchema) ]),
}).strict();

export default ReportCreateOrConnectWithoutCreatorInputSchema;
