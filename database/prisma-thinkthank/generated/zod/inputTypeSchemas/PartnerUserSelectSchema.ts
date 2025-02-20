import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'

export const PartnerUserSelectSchema: z.ZodType<Prisma.PartnerUserSelect> = z
    .object({
        id: z.boolean().optional(),
        role: z.boolean().optional(),
        userId: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional()
    })
    .strict()

export default PartnerUserSelectSchema
