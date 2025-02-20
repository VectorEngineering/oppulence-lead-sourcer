import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReportAccessUncheckedCreateWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUncheckedCreateWithoutReportInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  accessType: z.string()
}).strict();

export default ReportAccessUncheckedCreateWithoutReportInputSchema;
