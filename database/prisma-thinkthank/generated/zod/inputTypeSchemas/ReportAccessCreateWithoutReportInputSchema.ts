import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutReportAccessInputSchema } from './UserCreateNestedOneWithoutReportAccessInputSchema';

export const ReportAccessCreateWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessCreateWithoutReportInput> = z.object({
  id: z.string().cuid().optional(),
  accessType: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutReportAccessInputSchema)
}).strict();

export default ReportAccessCreateWithoutReportInputSchema;
