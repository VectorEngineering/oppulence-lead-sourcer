import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"

export const ReportRecipientSelectSchema: z.ZodType<Prisma.ReportRecipientSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  isActive: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export default ReportRecipientSelectSchema;
