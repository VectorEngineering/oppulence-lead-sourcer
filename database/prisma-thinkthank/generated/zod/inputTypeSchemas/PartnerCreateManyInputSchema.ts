import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerStatusSchema } from './PartnerStatusSchema'

export const PartnerCreateManyInputSchema: z.ZodType<Prisma.PartnerCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        email: z.string(),
        image: z.string().optional().nullable(),
        bio: z.string().optional().nullable(),
        country: z.string(),
        status: z.lazy(() => PartnerStatusSchema).optional(),
        stripeConnectId: z.string().optional().nullable(),
        payoutsEnabled: z.boolean().optional(),
        showOnLeaderboard: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default PartnerCreateManyInputSchema
