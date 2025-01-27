import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportSortingIncludeSchema } from '../inputTypeSchemas/ReportSortingIncludeSchema'
import { ReportSortingWhereUniqueInputSchema } from '../inputTypeSchemas/ReportSortingWhereUniqueInputSchema'
import { ReportArgsSchema } from './ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportSortingSelectSchema: z.ZodType<Prisma.ReportSortingSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        field: z.boolean().optional(),
        direction: z.boolean().optional(),
        position: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportSortingFindUniqueArgsSchema: z.ZodType<Prisma.ReportSortingFindUniqueArgs> = z
    .object({
        select: ReportSortingSelectSchema.optional(),
        include: ReportSortingIncludeSchema.optional(),
        where: ReportSortingWhereUniqueInputSchema
    })
    .strict()

export default ReportSortingFindUniqueArgsSchema
