import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const ReportAccessUncheckedUpdateWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUncheckedUpdateWithoutReportInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        accessType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default ReportAccessUncheckedUpdateWithoutReportInputSchema
