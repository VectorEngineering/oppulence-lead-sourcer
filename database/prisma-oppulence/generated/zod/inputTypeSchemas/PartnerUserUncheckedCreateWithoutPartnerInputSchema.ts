import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerRoleSchema } from './PartnerRoleSchema'

export const PartnerUserUncheckedCreateWithoutPartnerInputSchema: z.ZodType<Prisma.PartnerUserUncheckedCreateWithoutPartnerInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.lazy(() => PartnerRoleSchema).optional(),
        userId: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default PartnerUserUncheckedCreateWithoutPartnerInputSchema
