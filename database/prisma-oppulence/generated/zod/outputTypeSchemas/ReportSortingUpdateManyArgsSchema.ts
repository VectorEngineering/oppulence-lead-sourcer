import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportSortingUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportSortingUpdateManyMutationInputSchema'
import { ReportSortingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportSortingUncheckedUpdateManyInputSchema'
import { ReportSortingWhereInputSchema } from '../inputTypeSchemas/ReportSortingWhereInputSchema'

export const ReportSortingUpdateManyArgsSchema: z.ZodType<Prisma.ReportSortingUpdateManyArgs> = z
    .object({
        data: z.union([ReportSortingUpdateManyMutationInputSchema, ReportSortingUncheckedUpdateManyInputSchema]),
        where: ReportSortingWhereInputSchema.optional()
    })
    .strict()

export default ReportSortingUpdateManyArgsSchema
