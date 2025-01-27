import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"

export const ReportSortingSelectSchema: z.ZodType<Prisma.ReportSortingSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  field: z.boolean().optional(),
  direction: z.boolean().optional(),
  position: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export default ReportSortingSelectSchema;
