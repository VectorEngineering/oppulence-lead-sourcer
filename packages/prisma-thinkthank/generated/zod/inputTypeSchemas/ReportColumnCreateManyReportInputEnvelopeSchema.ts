import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportColumnCreateManyReportInputSchema } from './ReportColumnCreateManyReportInputSchema'

export const ReportColumnCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportColumnCreateManyReportInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ReportColumnCreateManyReportInputSchema),
            z.lazy(() => ReportColumnCreateManyReportInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ReportColumnCreateManyReportInputEnvelopeSchema
