import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'
import { CampaignCreateWithoutTouchpointsInputSchema } from './CampaignCreateWithoutTouchpointsInputSchema'
import { CampaignUncheckedCreateWithoutTouchpointsInputSchema } from './CampaignUncheckedCreateWithoutTouchpointsInputSchema'

export const CampaignCreateOrConnectWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutTouchpointsInput> = z
    .object({
        where: z.lazy(() => CampaignWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => CampaignCreateWithoutTouchpointsInputSchema),
            z.lazy(() => CampaignUncheckedCreateWithoutTouchpointsInputSchema)
        ])
    })
    .strict()

export default CampaignCreateOrConnectWithoutTouchpointsInputSchema
