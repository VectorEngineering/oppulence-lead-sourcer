import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { SortDirectionSchema } from './SortDirectionSchema'
import { EnumSortDirectionFieldUpdateOperationsInputSchema } from './EnumSortDirectionFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { ReportUpdateOneRequiredWithoutSortingsNestedInputSchema } from './ReportUpdateOneRequiredWithoutSortingsNestedInputSchema'

export const ReportSortingUpdateInputSchema: z.ZodType<Prisma.ReportSortingUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        field: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        direction: z.union([z.lazy(() => SortDirectionSchema), z.lazy(() => EnumSortDirectionFieldUpdateOperationsInputSchema)]).optional(),
        position: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        report: z.lazy(() => ReportUpdateOneRequiredWithoutSortingsNestedInputSchema).optional()
    })
    .strict()

export default ReportSortingUpdateInputSchema
