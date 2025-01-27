import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutAccessUsersInputSchema } from './ReportCreateWithoutAccessUsersInputSchema';
import { ReportUncheckedCreateWithoutAccessUsersInputSchema } from './ReportUncheckedCreateWithoutAccessUsersInputSchema';
import { ReportCreateOrConnectWithoutAccessUsersInputSchema } from './ReportCreateOrConnectWithoutAccessUsersInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';

export const ReportCreateNestedOneWithoutAccessUsersInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutAccessUsersInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutAccessUsersInputSchema),z.lazy(() => ReportUncheckedCreateWithoutAccessUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutAccessUsersInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
}).strict();

export default ReportCreateNestedOneWithoutAccessUsersInputSchema;
