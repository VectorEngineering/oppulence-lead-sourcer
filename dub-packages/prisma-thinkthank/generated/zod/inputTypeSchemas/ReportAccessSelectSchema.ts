import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ReportAccessSelectSchema: z.ZodType<Prisma.ReportAccessSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  userId: z.boolean().optional(),
  accessType: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ReportAccessSelectSchema;
