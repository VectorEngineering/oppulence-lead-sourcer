import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { TagUpdateOneRequiredWithoutLinksNestedInputSchema } from './TagUpdateOneRequiredWithoutLinksNestedInputSchema'

export const LinkTagUpdateWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagUpdateWithoutLinkInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        tag: z.lazy(() => TagUpdateOneRequiredWithoutLinksNestedInputSchema).optional()
    })
    .strict()

export default LinkTagUpdateWithoutLinkInputSchema
