import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReportAccessCreateManyUserInputSchema: z.ZodType<Prisma.ReportAccessCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  reportId: z.string(),
  accessType: z.string()
}).strict();

export default ReportAccessCreateManyUserInputSchema;
