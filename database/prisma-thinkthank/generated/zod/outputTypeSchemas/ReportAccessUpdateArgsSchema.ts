import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportAccessIncludeSchema } from '../inputTypeSchemas/ReportAccessIncludeSchema'
import { ReportAccessUpdateInputSchema } from '../inputTypeSchemas/ReportAccessUpdateInputSchema'
import { ReportAccessUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportAccessUncheckedUpdateInputSchema'
import { ReportAccessWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccessWhereUniqueInputSchema'
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportAccessSelectSchema: z.ZodType<Prisma.ReportAccessSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  userId: z.boolean().optional(),
  accessType: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ReportAccessUpdateArgsSchema: z.ZodType<Prisma.ReportAccessUpdateArgs> = z.object({
  select: ReportAccessSelectSchema.optional(),
  include: ReportAccessIncludeSchema.optional(),
  data: z.union([ ReportAccessUpdateInputSchema,ReportAccessUncheckedUpdateInputSchema ]),
  where: ReportAccessWhereUniqueInputSchema,
}).strict() ;

export default ReportAccessUpdateArgsSchema;
