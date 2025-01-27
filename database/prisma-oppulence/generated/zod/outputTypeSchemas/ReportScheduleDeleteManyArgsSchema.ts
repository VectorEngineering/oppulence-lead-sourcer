import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleWhereInputSchema } from '../inputTypeSchemas/ReportScheduleWhereInputSchema'

export const ReportScheduleDeleteManyArgsSchema: z.ZodType<Prisma.ReportScheduleDeleteManyArgs> = z
    .object({
        where: ReportScheduleWhereInputSchema.optional()
    })
    .strict()

export default ReportScheduleDeleteManyArgsSchema
