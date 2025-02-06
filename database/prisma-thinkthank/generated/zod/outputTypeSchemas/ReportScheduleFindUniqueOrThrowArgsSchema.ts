import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScheduleIncludeSchema } from '../inputTypeSchemas/ReportScheduleIncludeSchema'
import { ReportScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ReportScheduleWhereUniqueInputSchema'
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportScheduleSelectSchema: z.ZodType<Prisma.ReportScheduleSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  frequency: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  dayOfMonth: z.boolean().optional(),
  hour: z.boolean().optional(),
  minute: z.boolean().optional(),
  isActive: z.boolean().optional(),
  lastRun: z.boolean().optional(),
  nextRun: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export const ReportScheduleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReportScheduleFindUniqueOrThrowArgs> = z.object({
  select: ReportScheduleSelectSchema.optional(),
  include: ReportScheduleIncludeSchema.optional(),
  where: ReportScheduleWhereUniqueInputSchema,
}).strict() ;

export default ReportScheduleFindUniqueOrThrowArgsSchema;
