import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema } from './ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema'
import { UserUpdateOneRequiredWithoutReportAccessNestedInputSchema } from './UserUpdateOneRequiredWithoutReportAccessNestedInputSchema'

export const ReportAccessUpdateInputSchema: z.ZodType<Prisma.ReportAccessUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        accessType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        report: z.lazy(() => ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema).optional(),
        user: z.lazy(() => UserUpdateOneRequiredWithoutReportAccessNestedInputSchema).optional()
    })
    .strict()

export default ReportAccessUpdateInputSchema
