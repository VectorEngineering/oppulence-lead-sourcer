import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportRecipientCreateManyInputSchema: z.ZodType<Prisma.ReportRecipientCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        reportId: z.string(),
        email: z.string(),
        name: z.string().optional().nullable(),
        type: z.string(),
        isActive: z.boolean().optional()
    })
    .strict()

export default ReportRecipientCreateManyInputSchema
