import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'
import { ReportUpdateWithoutRecipientsInputSchema } from './ReportUpdateWithoutRecipientsInputSchema'
import { ReportUncheckedUpdateWithoutRecipientsInputSchema } from './ReportUncheckedUpdateWithoutRecipientsInputSchema'

export const ReportUpdateToOneWithWhereWithoutRecipientsInputSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutRecipientsInput> = z
    .object({
        where: z.lazy(() => ReportWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ReportUpdateWithoutRecipientsInputSchema),
            z.lazy(() => ReportUncheckedUpdateWithoutRecipientsInputSchema)
        ])
    })
    .strict()

export default ReportUpdateToOneWithWhereWithoutRecipientsInputSchema
