import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutAccessUsersInputSchema } from './ReportCreateWithoutAccessUsersInputSchema';
import { ReportUncheckedCreateWithoutAccessUsersInputSchema } from './ReportUncheckedCreateWithoutAccessUsersInputSchema';
import { ReportCreateOrConnectWithoutAccessUsersInputSchema } from './ReportCreateOrConnectWithoutAccessUsersInputSchema';
import { ReportUpsertWithoutAccessUsersInputSchema } from './ReportUpsertWithoutAccessUsersInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportUpdateToOneWithWhereWithoutAccessUsersInputSchema } from './ReportUpdateToOneWithWhereWithoutAccessUsersInputSchema';
import { ReportUpdateWithoutAccessUsersInputSchema } from './ReportUpdateWithoutAccessUsersInputSchema';
import { ReportUncheckedUpdateWithoutAccessUsersInputSchema } from './ReportUncheckedUpdateWithoutAccessUsersInputSchema';

export const ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutAccessUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutAccessUsersInputSchema),z.lazy(() => ReportUncheckedCreateWithoutAccessUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutAccessUsersInputSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutAccessUsersInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReportUpdateToOneWithWhereWithoutAccessUsersInputSchema),z.lazy(() => ReportUpdateWithoutAccessUsersInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutAccessUsersInputSchema) ]).optional(),
}).strict();

export default ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema;
