import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointScalarWhereInputSchema } from './LeadTouchpointScalarWhereInputSchema'
import { LeadTouchpointUpdateManyMutationInputSchema } from './LeadTouchpointUpdateManyMutationInputSchema'
import { LeadTouchpointUncheckedUpdateManyWithoutCampaignInputSchema } from './LeadTouchpointUncheckedUpdateManyWithoutCampaignInputSchema'

export const LeadTouchpointUpdateManyWithWhereWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointUpdateManyWithWhereWithoutCampaignInput> =
    z
        .object({
            where: z.lazy(() => LeadTouchpointScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadTouchpointUpdateManyMutationInputSchema),
                z.lazy(() => LeadTouchpointUncheckedUpdateManyWithoutCampaignInputSchema)
            ])
        })
        .strict()

export default LeadTouchpointUpdateManyWithWhereWithoutCampaignInputSchema
