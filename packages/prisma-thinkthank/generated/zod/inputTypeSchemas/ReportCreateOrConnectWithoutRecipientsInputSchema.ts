import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportCreateWithoutRecipientsInputSchema } from './ReportCreateWithoutRecipientsInputSchema'
import { ReportUncheckedCreateWithoutRecipientsInputSchema } from './ReportUncheckedCreateWithoutRecipientsInputSchema'

export const ReportCreateOrConnectWithoutRecipientsInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutRecipientsInput> = z
    .object({
        where: z.lazy(() => ReportWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ReportCreateWithoutRecipientsInputSchema),
            z.lazy(() => ReportUncheckedCreateWithoutRecipientsInputSchema)
        ])
    })
    .strict()

export default ReportCreateOrConnectWithoutRecipientsInputSchema
