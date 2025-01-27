import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportAccessUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportAccessUpdateManyMutationInputSchema'
import { ReportAccessUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportAccessUncheckedUpdateManyInputSchema'
import { ReportAccessWhereInputSchema } from '../inputTypeSchemas/ReportAccessWhereInputSchema'

export const ReportAccessUpdateManyArgsSchema: z.ZodType<Prisma.ReportAccessUpdateManyArgs> = z
    .object({
        data: z.union([ReportAccessUpdateManyMutationInputSchema, ReportAccessUncheckedUpdateManyInputSchema]),
        where: ReportAccessWhereInputSchema.optional()
    })
    .strict()

export default ReportAccessUpdateManyArgsSchema
