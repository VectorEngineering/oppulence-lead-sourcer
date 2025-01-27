import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReportAccessUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  reportId: z.string(),
  accessType: z.string()
}).strict();

export default ReportAccessUncheckedCreateWithoutUserInputSchema;
