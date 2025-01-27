import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'
import { CampaignFindManyArgsSchema } from '../outputTypeSchemas/CampaignFindManyArgsSchema'
import { LeadTouchpointCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadTouchpointCountOutputTypeArgsSchema'

export const LeadTouchpointIncludeSchema: z.ZodType<Prisma.LeadTouchpointInclude> = z
    .object({
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        Campaign: z.union([z.boolean(), z.lazy(() => CampaignFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadTouchpointCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default LeadTouchpointIncludeSchema
