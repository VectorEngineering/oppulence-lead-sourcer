import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantWhereUniqueInputSchema } from './CampaignVariantWhereUniqueInputSchema'
import { CampaignVariantUpdateWithoutCampaignInputSchema } from './CampaignVariantUpdateWithoutCampaignInputSchema'
import { CampaignVariantUncheckedUpdateWithoutCampaignInputSchema } from './CampaignVariantUncheckedUpdateWithoutCampaignInputSchema'
import { CampaignVariantCreateWithoutCampaignInputSchema } from './CampaignVariantCreateWithoutCampaignInputSchema'
import { CampaignVariantUncheckedCreateWithoutCampaignInputSchema } from './CampaignVariantUncheckedCreateWithoutCampaignInputSchema'

export const CampaignVariantUpsertWithWhereUniqueWithoutCampaignInputSchema: z.ZodType<Prisma.CampaignVariantUpsertWithWhereUniqueWithoutCampaignInput> =
    z
        .object({
            where: z.lazy(() => CampaignVariantWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => CampaignVariantUpdateWithoutCampaignInputSchema),
                z.lazy(() => CampaignVariantUncheckedUpdateWithoutCampaignInputSchema)
            ]),
            create: z.union([
                z.lazy(() => CampaignVariantCreateWithoutCampaignInputSchema),
                z.lazy(() => CampaignVariantUncheckedCreateWithoutCampaignInputSchema)
            ])
        })
        .strict()

export default CampaignVariantUpsertWithWhereUniqueWithoutCampaignInputSchema
