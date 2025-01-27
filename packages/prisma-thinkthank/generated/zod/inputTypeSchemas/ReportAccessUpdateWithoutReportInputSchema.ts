import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutReportAccessNestedInputSchema } from './UserUpdateOneRequiredWithoutReportAccessNestedInputSchema';

export const ReportAccessUpdateWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUpdateWithoutReportInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accessType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReportAccessNestedInputSchema).optional()
}).strict();

export default ReportAccessUpdateWithoutReportInputSchema;
