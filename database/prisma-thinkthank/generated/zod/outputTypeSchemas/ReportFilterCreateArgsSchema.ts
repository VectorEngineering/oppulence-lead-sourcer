import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportFilterIncludeSchema } from '../inputTypeSchemas/ReportFilterIncludeSchema'
import { ReportFilterCreateInputSchema } from '../inputTypeSchemas/ReportFilterCreateInputSchema'
import { ReportFilterUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportFilterUncheckedCreateInputSchema'
import { ReportArgsSchema } from './ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportFilterSelectSchema: z.ZodType<Prisma.ReportFilterSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        field: z.boolean().optional(),
        operator: z.boolean().optional(),
        value: z.boolean().optional(),
        valueType: z.boolean().optional(),
        group: z.boolean().optional(),
        position: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportFilterCreateArgsSchema: z.ZodType<Prisma.ReportFilterCreateArgs> = z
    .object({
        select: ReportFilterSelectSchema.optional(),
        include: ReportFilterIncludeSchema.optional(),
        data: z.union([ReportFilterCreateInputSchema, ReportFilterUncheckedCreateInputSchema])
    })
    .strict()

export default ReportFilterCreateArgsSchema
