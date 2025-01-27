import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantWhereUniqueInputSchema } from './CampaignVariantWhereUniqueInputSchema'
import { CampaignVariantUpdateWithoutCampaignInputSchema } from './CampaignVariantUpdateWithoutCampaignInputSchema'
import { CampaignVariantUncheckedUpdateWithoutCampaignInputSchema } from './CampaignVariantUncheckedUpdateWithoutCampaignInputSchema'

export const CampaignVariantUpdateWithWhereUniqueWithoutCampaignInputSchema: z.ZodType<Prisma.CampaignVariantUpdateWithWhereUniqueWithoutCampaignInput> =
    z
        .object({
            where: z.lazy(() => CampaignVariantWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => CampaignVariantUpdateWithoutCampaignInputSchema),
                z.lazy(() => CampaignVariantUncheckedUpdateWithoutCampaignInputSchema)
            ])
        })
        .strict()

export default CampaignVariantUpdateWithWhereUniqueWithoutCampaignInputSchema
