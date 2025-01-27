import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportSortingIncludeSchema } from '../inputTypeSchemas/ReportSortingIncludeSchema'
import { ReportSortingWhereInputSchema } from '../inputTypeSchemas/ReportSortingWhereInputSchema'
import { ReportSortingOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportSortingOrderByWithRelationInputSchema'
import { ReportSortingWhereUniqueInputSchema } from '../inputTypeSchemas/ReportSortingWhereUniqueInputSchema'
import { ReportSortingScalarFieldEnumSchema } from '../inputTypeSchemas/ReportSortingScalarFieldEnumSchema'
import { ReportArgsSchema } from "../outputTypeSchemas/ReportArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportSortingSelectSchema: z.ZodType<Prisma.ReportSortingSelect> = z.object({
  id: z.boolean().optional(),
  reportId: z.boolean().optional(),
  field: z.boolean().optional(),
  direction: z.boolean().optional(),
  position: z.boolean().optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export const ReportSortingFindManyArgsSchema: z.ZodType<Prisma.ReportSortingFindManyArgs> = z.object({
  select: ReportSortingSelectSchema.optional(),
  include: ReportSortingIncludeSchema.optional(),
  where: ReportSortingWhereInputSchema.optional(),
  orderBy: z.union([ ReportSortingOrderByWithRelationInputSchema.array(),ReportSortingOrderByWithRelationInputSchema ]).optional(),
  cursor: ReportSortingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReportSortingScalarFieldEnumSchema,ReportSortingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ReportSortingFindManyArgsSchema;
