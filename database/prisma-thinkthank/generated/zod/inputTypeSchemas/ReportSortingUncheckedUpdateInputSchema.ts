import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { SortDirectionSchema } from './SortDirectionSchema'
import { EnumSortDirectionFieldUpdateOperationsInputSchema } from './EnumSortDirectionFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'

export const ReportSortingUncheckedUpdateInputSchema: z.ZodType<Prisma.ReportSortingUncheckedUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        reportId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        direction: z.union([z.lazy(() => SortDirectionSchema), z.lazy(() => EnumSortDirectionFieldUpdateOperationsInputSchema)]).optional(),
        position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default ReportSortingUncheckedUpdateInputSchema
