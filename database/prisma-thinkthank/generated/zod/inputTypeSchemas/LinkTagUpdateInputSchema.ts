import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LinkUpdateOneRequiredWithoutTagsNestedInputSchema } from './LinkUpdateOneRequiredWithoutTagsNestedInputSchema'
import { TagUpdateOneRequiredWithoutLinksNestedInputSchema } from './TagUpdateOneRequiredWithoutLinksNestedInputSchema'

export const LinkTagUpdateInputSchema: z.ZodType<Prisma.LinkTagUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        link: z.lazy(() => LinkUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
        tag: z.lazy(() => TagUpdateOneRequiredWithoutLinksNestedInputSchema).optional()
    })
    .strict()

export default LinkTagUpdateInputSchema
