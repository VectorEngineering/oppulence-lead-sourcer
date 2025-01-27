import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportAccessReportIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.ReportAccessReportIdUserIdCompoundUniqueInput> = z
    .object({
        reportId: z.string(),
        userId: z.string()
    })
    .strict()

export default ReportAccessReportIdUserIdCompoundUniqueInputSchema
