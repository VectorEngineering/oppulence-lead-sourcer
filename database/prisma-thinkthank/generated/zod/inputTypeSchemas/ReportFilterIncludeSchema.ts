import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'

export const ReportFilterIncludeSchema: z.ZodType<Prisma.ReportFilterInclude> = z
    .object({
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export default ReportFilterIncludeSchema
