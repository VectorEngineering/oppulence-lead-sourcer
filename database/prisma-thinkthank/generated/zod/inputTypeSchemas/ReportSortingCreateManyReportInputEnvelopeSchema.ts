import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportSortingCreateManyReportInputSchema } from './ReportSortingCreateManyReportInputSchema'

export const ReportSortingCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportSortingCreateManyReportInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ReportSortingCreateManyReportInputSchema),
            z.lazy(() => ReportSortingCreateManyReportInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ReportSortingCreateManyReportInputEnvelopeSchema
