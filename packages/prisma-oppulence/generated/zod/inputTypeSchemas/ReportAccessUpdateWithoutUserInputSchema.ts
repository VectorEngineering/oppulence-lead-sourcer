import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema } from './ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema'

export const ReportAccessUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReportAccessUpdateWithoutUserInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        accessType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        report: z.lazy(() => ReportUpdateOneRequiredWithoutAccessUsersNestedInputSchema).optional()
    })
    .strict()

export default ReportAccessUpdateWithoutUserInputSchema
