import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'

export const ReportColumnIncludeSchema: z.ZodType<Prisma.ReportColumnInclude> = z
    .object({
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export default ReportColumnIncludeSchema
