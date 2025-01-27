import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportRecipientWhereInputSchema } from './ReportRecipientWhereInputSchema';

export const ReportRecipientListRelationFilterSchema: z.ZodType<Prisma.ReportRecipientListRelationFilter> = z.object({
  every: z.lazy(() => ReportRecipientWhereInputSchema).optional(),
  some: z.lazy(() => ReportRecipientWhereInputSchema).optional(),
  none: z.lazy(() => ReportRecipientWhereInputSchema).optional()
}).strict();

export default ReportRecipientListRelationFilterSchema;
