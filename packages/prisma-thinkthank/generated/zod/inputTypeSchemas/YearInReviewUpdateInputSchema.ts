import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { ProjectUpdateOneRequiredWithoutYearInReviewsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutYearInReviewsNestedInputSchema'

export const YearInReviewUpdateInputSchema: z.ZodType<Prisma.YearInReviewUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        year: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        totalLinks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        totalClicks: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        topLinks: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        topCountries: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        sentAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        workspace: z.lazy(() => ProjectUpdateOneRequiredWithoutYearInReviewsNestedInputSchema).optional()
    })
    .strict()

export default YearInReviewUpdateInputSchema
