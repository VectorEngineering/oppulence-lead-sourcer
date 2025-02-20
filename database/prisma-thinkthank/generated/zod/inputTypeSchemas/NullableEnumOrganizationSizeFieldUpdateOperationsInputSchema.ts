import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'

export const NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumOrganizationSizeFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => OrganizationSizeSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumOrganizationSizeFieldUpdateOperationsInputSchema
