import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportAccessCreateManyInputSchema: z.ZodType<Prisma.ReportAccessCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        reportId: z.string(),
        userId: z.string(),
        accessType: z.string()
    })
    .strict()

export default ReportAccessCreateManyInputSchema
