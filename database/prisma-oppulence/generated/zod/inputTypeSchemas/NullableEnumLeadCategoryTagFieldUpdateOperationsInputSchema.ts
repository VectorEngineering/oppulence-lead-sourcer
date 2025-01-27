import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCategoryTagSchema } from './LeadCategoryTagSchema'

export const NullableEnumLeadCategoryTagFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumLeadCategoryTagFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => LeadCategoryTagSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumLeadCategoryTagFieldUpdateOperationsInputSchema
