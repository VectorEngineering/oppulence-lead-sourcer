import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema'
import { LeadTouchpointUpdateWithoutCampaignInputSchema } from './LeadTouchpointUpdateWithoutCampaignInputSchema'
import { LeadTouchpointUncheckedUpdateWithoutCampaignInputSchema } from './LeadTouchpointUncheckedUpdateWithoutCampaignInputSchema'
import { LeadTouchpointCreateWithoutCampaignInputSchema } from './LeadTouchpointCreateWithoutCampaignInputSchema'
import { LeadTouchpointUncheckedCreateWithoutCampaignInputSchema } from './LeadTouchpointUncheckedCreateWithoutCampaignInputSchema'

export const LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInput> =
    z
        .object({
            where: z.lazy(() => LeadTouchpointWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadTouchpointUpdateWithoutCampaignInputSchema),
                z.lazy(() => LeadTouchpointUncheckedUpdateWithoutCampaignInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadTouchpointCreateWithoutCampaignInputSchema),
                z.lazy(() => LeadTouchpointUncheckedCreateWithoutCampaignInputSchema)
            ])
        })
        .strict()

export default LeadTouchpointUpsertWithWhereUniqueWithoutCampaignInputSchema
