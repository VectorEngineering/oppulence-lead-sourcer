import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportRecipientWhereUniqueInputSchema } from './ReportRecipientWhereUniqueInputSchema'
import { ReportRecipientCreateWithoutReportInputSchema } from './ReportRecipientCreateWithoutReportInputSchema'
import { ReportRecipientUncheckedCreateWithoutReportInputSchema } from './ReportRecipientUncheckedCreateWithoutReportInputSchema'

export const ReportRecipientCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportRecipientCreateOrConnectWithoutReportInput> = z
    .object({
        where: z.lazy(() => ReportRecipientWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ReportRecipientCreateWithoutReportInputSchema),
            z.lazy(() => ReportRecipientUncheckedCreateWithoutReportInputSchema)
        ])
    })
    .strict()

export default ReportRecipientCreateOrConnectWithoutReportInputSchema
