import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportFormatSchema } from './ReportFormatSchema'

export const EnumReportFormatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumReportFormatFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => ReportFormatSchema).optional()
    })
    .strict()

export default EnumReportFormatFieldUpdateOperationsInputSchema
