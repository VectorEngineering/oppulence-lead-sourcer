import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportAccessUncheckedCreateInputSchema: z.ZodType<Prisma.ReportAccessUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        reportId: z.string(),
        userId: z.string(),
        accessType: z.string()
    })
    .strict()

export default ReportAccessUncheckedCreateInputSchema
