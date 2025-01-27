import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerRoleSchema } from './PartnerRoleSchema'

export const EnumPartnerRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPartnerRoleFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => PartnerRoleSchema).optional()
    })
    .strict()

export default EnumPartnerRoleFieldUpdateOperationsInputSchema
