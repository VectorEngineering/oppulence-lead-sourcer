import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportFormatSchema } from './ReportFormatSchema'
import { NestedEnumReportFormatFilterSchema } from './NestedEnumReportFormatFilterSchema'

export const EnumReportFormatFilterSchema: z.ZodType<Prisma.EnumReportFormatFilter> = z
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

export default EnumReportFormatFilterSchema
