import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportFormatSchema } from './ReportFormatSchema'

export const NestedEnumReportFormatFilterSchema: z.ZodType<Prisma.NestedEnumReportFormatFilter> = z
    .object({
        equals: z.lazy(() => ReportFormatSchema).optional(),
        in: z
            .lazy(() => ReportFormatSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ReportFormatSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => ReportFormatSchema), z.lazy(() => NestedEnumReportFormatFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumReportFormatFilterSchema
