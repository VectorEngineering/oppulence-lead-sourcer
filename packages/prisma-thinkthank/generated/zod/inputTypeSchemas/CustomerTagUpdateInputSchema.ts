import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema } from './CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema'
import { TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema } from './TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema'
import { ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema } from './ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema'

export const CustomerTagUpdateInputSchema: z.ZodType<Prisma.CustomerTagUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        customer: z.lazy(() => CustomerUpdateOneRequiredWithoutCustomerTagsNestedInputSchema).optional(),
        tag: z.lazy(() => TagUpdateOneRequiredWithoutCustomerTagNestedInputSchema).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema).optional()
    })
    .strict()

export default CustomerTagUpdateInputSchema
