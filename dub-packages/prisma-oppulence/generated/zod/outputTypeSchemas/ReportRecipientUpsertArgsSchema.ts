import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportRecipientIncludeSchema } from '../inputTypeSchemas/ReportRecipientIncludeSchema'
import { ReportRecipientWhereUniqueInputSchema } from '../inputTypeSchemas/ReportRecipientWhereUniqueInputSchema'
import { ReportRecipientCreateInputSchema } from '../inputTypeSchemas/ReportRecipientCreateInputSchema'
import { ReportRecipientUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportRecipientUncheckedCreateInputSchema'
import { ReportRecipientUpdateInputSchema } from '../inputTypeSchemas/ReportRecipientUpdateInputSchema'
import { ReportRecipientUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportRecipientUncheckedUpdateInputSchema'
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportRecipientSelectSchema: z.ZodType<Prisma.ReportRecipientSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  isActive: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export const ReportRecipientUpsertArgsSchema: z.ZodType<Prisma.ReportRecipientUpsertArgs> = z.object({
  select: ReportRecipientSelectSchema.optional(),
  include: ReportRecipientIncludeSchema.optional(),
  where: ReportRecipientWhereUniqueInputSchema,
  create: z.union([ ReportRecipientCreateInputSchema,ReportRecipientUncheckedCreateInputSchema ]),
  update: z.union([ ReportRecipientUpdateInputSchema,ReportRecipientUncheckedUpdateInputSchema ]),
}).strict() ;

export default ReportRecipientUpsertArgsSchema;
