import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportRecipientIncludeSchema } from '../inputTypeSchemas/ReportRecipientIncludeSchema'
import { ReportRecipientWhereInputSchema } from '../inputTypeSchemas/ReportRecipientWhereInputSchema'
import { ReportRecipientOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportRecipientOrderByWithRelationInputSchema'
import { ReportRecipientWhereUniqueInputSchema } from '../inputTypeSchemas/ReportRecipientWhereUniqueInputSchema'
import { ReportRecipientScalarFieldEnumSchema } from '../inputTypeSchemas/ReportRecipientScalarFieldEnumSchema'
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

export const ReportRecipientFindFirstArgsSchema: z.ZodType<Prisma.ReportRecipientFindFirstArgs> = z.object({
  select: ReportRecipientSelectSchema.optional(),
  include: ReportRecipientIncludeSchema.optional(),
  where: ReportRecipientWhereInputSchema.optional(),
  orderBy: z.union([ ReportRecipientOrderByWithRelationInputSchema.array(),ReportRecipientOrderByWithRelationInputSchema ]).optional(),
  cursor: ReportRecipientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReportRecipientScalarFieldEnumSchema,ReportRecipientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ReportRecipientFindFirstArgsSchema;
