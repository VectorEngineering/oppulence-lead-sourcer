import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadTouchpointIncludeSchema } from '../inputTypeSchemas/LeadTouchpointIncludeSchema'
import { LeadTouchpointWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTouchpointWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
import { CampaignFindManyArgsSchema } from './CampaignFindManyArgsSchema'
import { LeadTouchpointCountOutputTypeArgsSchema } from './LeadTouchpointCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadTouchpointSelectSchema: z.ZodType<Prisma.LeadTouchpointSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        channel: z.boolean().optional(),
        campaign: z.boolean().optional(),
        content: z.boolean().optional(),
        interaction: z.boolean().optional(),
        timestamp: z.boolean().optional(),
        isFirstTouch: z.boolean().optional(),
        isLastTouch: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        Campaign: z.union([z.boolean(), z.lazy(() => CampaignFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadTouchpointCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadTouchpointDeleteArgsSchema: z.ZodType<Prisma.LeadTouchpointDeleteArgs> = z
    .object({
        select: LeadTouchpointSelectSchema.optional(),
        include: LeadTouchpointIncludeSchema.optional(),
        where: LeadTouchpointWhereUniqueInputSchema
    })
    .strict()

export default LeadTouchpointDeleteArgsSchema
