import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantWhereUniqueInputSchema } from './CampaignVariantWhereUniqueInputSchema'
import { CampaignVariantCreateWithoutCampaignInputSchema } from './CampaignVariantCreateWithoutCampaignInputSchema'
import { CampaignVariantUncheckedCreateWithoutCampaignInputSchema } from './CampaignVariantUncheckedCreateWithoutCampaignInputSchema'

export const CampaignVariantCreateOrConnectWithoutCampaignInputSchema: z.ZodType<Prisma.CampaignVariantCreateOrConnectWithoutCampaignInput> =
    z
        .object({
            where: z.lazy(() => CampaignVariantWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => CampaignVariantCreateWithoutCampaignInputSchema),
                z.lazy(() => CampaignVariantUncheckedCreateWithoutCampaignInputSchema)
            ])
        })
        .strict()

export default CampaignVariantCreateOrConnectWithoutCampaignInputSchema
