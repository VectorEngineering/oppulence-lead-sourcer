import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportSortingIncludeSchema } from '../inputTypeSchemas/ReportSortingIncludeSchema'
import { ReportSortingUpdateInputSchema } from '../inputTypeSchemas/ReportSortingUpdateInputSchema'
import { ReportSortingUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportSortingUncheckedUpdateInputSchema'
import { ReportSortingWhereUniqueInputSchema } from '../inputTypeSchemas/ReportSortingWhereUniqueInputSchema'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'
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

export const ReportSortingUpdateArgsSchema: z.ZodType<Prisma.ReportSortingUpdateArgs> = z
    .object({
        select: ReportSortingSelectSchema.optional(),
        include: ReportSortingIncludeSchema.optional(),
        data: z.union([ReportSortingUpdateInputSchema, ReportSortingUncheckedUpdateInputSchema]),
        where: ReportSortingWhereUniqueInputSchema
    })
    .strict()

export default ReportSortingUpdateArgsSchema
