import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutCampaignInputSchema } from './LeadCreateWithoutCampaignInputSchema'
import { LeadUncheckedCreateWithoutCampaignInputSchema } from './LeadUncheckedCreateWithoutCampaignInputSchema'

export const LeadCreateOrConnectWithoutCampaignInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutCampaignInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutCampaignInputSchema), z.lazy(() => LeadUncheckedCreateWithoutCampaignInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutCampaignInputSchema
