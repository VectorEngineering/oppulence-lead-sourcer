import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'

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

export default ReportColumnSelectSchema
