import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'
import { CampaignUpdateWithoutTouchpointsInputSchema } from './CampaignUpdateWithoutTouchpointsInputSchema'
import { CampaignUncheckedUpdateWithoutTouchpointsInputSchema } from './CampaignUncheckedUpdateWithoutTouchpointsInputSchema'
import { CampaignCreateWithoutTouchpointsInputSchema } from './CampaignCreateWithoutTouchpointsInputSchema'
import { CampaignUncheckedCreateWithoutTouchpointsInputSchema } from './CampaignUncheckedCreateWithoutTouchpointsInputSchema'

export const CampaignUpsertWithWhereUniqueWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignUpsertWithWhereUniqueWithoutTouchpointsInput> =
    z
        .object({
            where: z.lazy(() => CampaignWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => CampaignUpdateWithoutTouchpointsInputSchema),
                z.lazy(() => CampaignUncheckedUpdateWithoutTouchpointsInputSchema)
            ]),
            create: z.union([
                z.lazy(() => CampaignCreateWithoutTouchpointsInputSchema),
                z.lazy(() => CampaignUncheckedCreateWithoutTouchpointsInputSchema)
            ])
        })
        .strict()

export default CampaignUpsertWithWhereUniqueWithoutTouchpointsInputSchema
