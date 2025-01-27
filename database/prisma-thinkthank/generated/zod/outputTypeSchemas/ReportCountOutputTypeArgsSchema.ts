import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportCountOutputTypeSelectSchema } from './ReportCountOutputTypeSelectSchema'

export const ReportCountOutputTypeArgsSchema: z.ZodType<Prisma.ReportCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => ReportCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default ReportCountOutputTypeSelectSchema
