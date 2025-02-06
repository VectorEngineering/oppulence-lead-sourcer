import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ReportAccessIncludeSchema: z.ZodType<Prisma.ReportAccessInclude> = z.object({
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ReportAccessIncludeSchema;
