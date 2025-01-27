import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerRoleSchema } from './PartnerRoleSchema'

export const PartnerInviteUncheckedCreateInputSchema: z.ZodType<Prisma.PartnerInviteUncheckedCreateInput> = z
    .object({
        email: z.string(),
        expires: z.coerce.date(),
        partnerId: z.string(),
        role: z.lazy(() => PartnerRoleSchema).optional(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default PartnerInviteUncheckedCreateInputSchema
