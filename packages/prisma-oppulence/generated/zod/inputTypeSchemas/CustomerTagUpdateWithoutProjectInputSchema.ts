import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema } from './CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema'
import { TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema } from './TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema'

export const CustomerTagUpdateWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagUpdateWithoutProjectInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        customer: z.lazy(() => CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema).optional(),
        tag: z.lazy(() => TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema).optional()
    })
    .strict()

export default CustomerTagUpdateWithoutProjectInputSchema
