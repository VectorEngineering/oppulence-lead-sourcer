import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"

export const ReportFilterSelectSchema: z.ZodType<Prisma.ReportFilterSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  valueType: z.boolean().optional(),
  group: z.boolean().optional(),
  position: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export default ReportFilterSelectSchema;
