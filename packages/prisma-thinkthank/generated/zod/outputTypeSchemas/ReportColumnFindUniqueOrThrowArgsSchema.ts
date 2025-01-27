import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportColumnIncludeSchema } from '../inputTypeSchemas/ReportColumnIncludeSchema'
import { ReportColumnWhereUniqueInputSchema } from '../inputTypeSchemas/ReportColumnWhereUniqueInputSchema'
import { ReportArgsSchema } from './ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportColumnSelectSchema: z.ZodType<Prisma.ReportColumnSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        field: z.boolean().optional(),
        label: z.boolean().optional(),
        width: z.boolean().optional(),
        position: z.boolean().optional(),
        isVisible: z.boolean().optional(),
        format: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportColumnFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReportColumnFindUniqueOrThrowArgs> = z
    .object({
        select: ReportColumnSelectSchema.optional(),
        include: ReportColumnIncludeSchema.optional(),
        where: ReportColumnWhereUniqueInputSchema
    })
    .strict()

export default ReportColumnFindUniqueOrThrowArgsSchema
