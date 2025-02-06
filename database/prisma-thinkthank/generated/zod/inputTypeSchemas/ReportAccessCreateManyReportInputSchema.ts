import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReportAccessCreateManyReportInputSchema: z.ZodType<Prisma.ReportAccessCreateManyReportInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  accessType: z.string()
}).strict();

export default ReportAccessCreateManyReportInputSchema;
