import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportScheduleUpdateManyMutationInputSchema'
import { ReportScheduleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportScheduleUncheckedUpdateManyInputSchema'
import { ReportScheduleWhereInputSchema } from '../inputTypeSchemas/ReportScheduleWhereInputSchema'

export const ReportScheduleUpdateManyArgsSchema: z.ZodType<Prisma.ReportScheduleUpdateManyArgs> = z
    .object({
        data: z.union([ReportScheduleUpdateManyMutationInputSchema, ReportScheduleUncheckedUpdateManyInputSchema]),
        where: ReportScheduleWhereInputSchema.optional()
    })
    .strict()

export default ReportScheduleUpdateManyArgsSchema
