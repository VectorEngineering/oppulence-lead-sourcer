import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportColumnIncludeSchema } from '../inputTypeSchemas/ReportColumnIncludeSchema'
import { ReportColumnCreateInputSchema } from '../inputTypeSchemas/ReportColumnCreateInputSchema'
import { ReportColumnUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportColumnUncheckedCreateInputSchema'
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportColumnSelectSchema: z.ZodType<Prisma.ReportColumnSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  field: z.boolean().optional(),
  label: z.boolean().optional(),
  width: z.boolean().optional(),
  position: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  format: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export const ReportColumnCreateArgsSchema: z.ZodType<Prisma.ReportColumnCreateArgs> = z.object({
  select: ReportColumnSelectSchema.optional(),
  include: ReportColumnIncludeSchema.optional(),
  data: z.union([ ReportColumnCreateInputSchema,ReportColumnUncheckedCreateInputSchema ]),
}).strict() ;

export default ReportColumnCreateArgsSchema;
