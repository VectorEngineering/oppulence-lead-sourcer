import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema'

export const LeadSocialProfileCreateManyInputSchema: z.ZodType<Prisma.LeadSocialProfileCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        platform: z.lazy(() => LeadSocialPlatformSchema),
        profileUrl: z.string(),
        username: z.string().optional().nullable(),
        lastSynced: z.coerce.date().optional().nullable()
    })
    .strict()

export default LeadSocialProfileCreateManyInputSchema
