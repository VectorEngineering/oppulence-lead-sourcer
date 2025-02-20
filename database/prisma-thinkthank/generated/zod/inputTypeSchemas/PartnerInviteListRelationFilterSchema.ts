import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteWhereInputSchema } from './PartnerInviteWhereInputSchema'

export const PartnerInviteListRelationFilterSchema: z.ZodType<Prisma.PartnerInviteListRelationFilter> = z
    .object({
        every: z.lazy(() => PartnerInviteWhereInputSchema).optional(),
        some: z.lazy(() => PartnerInviteWhereInputSchema).optional(),
        none: z.lazy(() => PartnerInviteWhereInputSchema).optional()
    })
    .strict()

export default PartnerInviteListRelationFilterSchema
