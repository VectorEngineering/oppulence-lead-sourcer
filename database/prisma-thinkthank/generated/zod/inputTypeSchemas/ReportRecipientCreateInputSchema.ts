import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateNestedOneWithoutRecipientsInputSchema } from './ReportCreateNestedOneWithoutRecipientsInputSchema';

export const ReportRecipientCreateInputSchema: z.ZodType<Prisma.ReportRecipientCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  type: z.string(),
  isActive: z.boolean().optional(),
  report: z.lazy(() => ReportCreateNestedOneWithoutRecipientsInputSchema)
}).strict();

export default ReportRecipientCreateInputSchema;
