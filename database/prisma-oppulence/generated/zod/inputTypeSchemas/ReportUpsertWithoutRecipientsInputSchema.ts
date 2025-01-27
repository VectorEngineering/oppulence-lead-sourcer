import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportUpdateWithoutRecipientsInputSchema } from './ReportUpdateWithoutRecipientsInputSchema'
import { ReportUncheckedUpdateWithoutRecipientsInputSchema } from './ReportUncheckedUpdateWithoutRecipientsInputSchema'
import { ReportCreateWithoutRecipientsInputSchema } from './ReportCreateWithoutRecipientsInputSchema'
import { ReportUncheckedCreateWithoutRecipientsInputSchema } from './ReportUncheckedCreateWithoutRecipientsInputSchema'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'

export const ReportUpsertWithoutRecipientsInputSchema: z.ZodType<Prisma.ReportUpsertWithoutRecipientsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ReportUpdateWithoutRecipientsInputSchema),
            z.lazy(() => ReportUncheckedUpdateWithoutRecipientsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ReportCreateWithoutRecipientsInputSchema),
            z.lazy(() => ReportUncheckedCreateWithoutRecipientsInputSchema)
        ]),
        where: z.lazy(() => ReportWhereInputSchema).optional()
    })
    .strict()

export default ReportUpsertWithoutRecipientsInputSchema
