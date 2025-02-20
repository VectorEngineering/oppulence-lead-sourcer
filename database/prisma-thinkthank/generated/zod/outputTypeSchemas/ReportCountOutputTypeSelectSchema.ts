import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const ReportCountOutputTypeSelectSchema: z.ZodType<Prisma.ReportCountOutputTypeSelect> = z
    .object({
        filters: z.boolean().optional(),
        sortings: z.boolean().optional(),
        columns: z.boolean().optional(),
        schedules: z.boolean().optional(),
        recipients: z.boolean().optional(),
        accessUsers: z.boolean().optional()
    })
    .strict()

export default ReportCountOutputTypeSelectSchema
