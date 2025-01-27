import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LinkTagUncheckedUpdateManyWithoutTagInputSchema: z.ZodType<Prisma.LinkTagUncheckedUpdateManyWithoutTagInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        linkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default LinkTagUncheckedUpdateManyWithoutTagInputSchema
