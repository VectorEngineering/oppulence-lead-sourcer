import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserWhereInputSchema } from './PartnerUserWhereInputSchema'

export const PartnerUserListRelationFilterSchema: z.ZodType<Prisma.PartnerUserListRelationFilter> = z
    .object({
        every: z.lazy(() => PartnerUserWhereInputSchema).optional(),
        some: z.lazy(() => PartnerUserWhereInputSchema).optional(),
        none: z.lazy(() => PartnerUserWhereInputSchema).optional()
    })
    .strict()

export default PartnerUserListRelationFilterSchema
