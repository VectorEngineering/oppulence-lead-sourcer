import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const PartnerInviteEmailPartnerIdCompoundUniqueInputSchema: z.ZodType<Prisma.PartnerInviteEmailPartnerIdCompoundUniqueInput> = z
    .object({
        email: z.string(),
        partnerId: z.string()
    })
    .strict()

export default PartnerInviteEmailPartnerIdCompoundUniqueInputSchema
