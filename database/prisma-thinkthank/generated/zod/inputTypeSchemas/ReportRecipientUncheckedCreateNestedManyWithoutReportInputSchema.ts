import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportRecipientCreateWithoutReportInputSchema } from './ReportRecipientCreateWithoutReportInputSchema'
import { ReportRecipientUncheckedCreateWithoutReportInputSchema } from './ReportRecipientUncheckedCreateWithoutReportInputSchema'
import { ReportRecipientCreateOrConnectWithoutReportInputSchema } from './ReportRecipientCreateOrConnectWithoutReportInputSchema'
import { ReportRecipientCreateManyReportInputEnvelopeSchema } from './ReportRecipientCreateManyReportInputEnvelopeSchema'
import { ReportRecipientWhereUniqueInputSchema } from './ReportRecipientWhereUniqueInputSchema'

export const ReportRecipientUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportRecipientUncheckedCreateNestedManyWithoutReportInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ReportRecipientCreateWithoutReportInputSchema),
                    z.lazy(() => ReportRecipientCreateWithoutReportInputSchema).array(),
                    z.lazy(() => ReportRecipientUncheckedCreateWithoutReportInputSchema),
                    z.lazy(() => ReportRecipientUncheckedCreateWithoutReportInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ReportRecipientCreateOrConnectWithoutReportInputSchema),
                    z.lazy(() => ReportRecipientCreateOrConnectWithoutReportInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ReportRecipientCreateManyReportInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => ReportRecipientWhereUniqueInputSchema), z.lazy(() => ReportRecipientWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default ReportRecipientUncheckedCreateNestedManyWithoutReportInputSchema
