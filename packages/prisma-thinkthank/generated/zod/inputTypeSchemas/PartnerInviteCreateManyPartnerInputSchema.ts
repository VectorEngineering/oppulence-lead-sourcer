import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerRoleSchema } from './PartnerRoleSchema'

export const PartnerInviteCreateManyPartnerInputSchema: z.ZodType<Prisma.PartnerInviteCreateManyPartnerInput> = z
    .object({
        email: z.string(),
        expires: z.coerce.date(),
        role: z.lazy(() => PartnerRoleSchema).optional(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default PartnerInviteCreateManyPartnerInputSchema
