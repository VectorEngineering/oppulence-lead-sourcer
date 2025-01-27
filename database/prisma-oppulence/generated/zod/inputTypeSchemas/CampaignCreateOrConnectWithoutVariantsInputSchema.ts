import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'
import { CampaignCreateWithoutVariantsInputSchema } from './CampaignCreateWithoutVariantsInputSchema'
import { CampaignUncheckedCreateWithoutVariantsInputSchema } from './CampaignUncheckedCreateWithoutVariantsInputSchema'

export const CampaignCreateOrConnectWithoutVariantsInputSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutVariantsInput> = z
    .object({
        where: z.lazy(() => CampaignWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => CampaignCreateWithoutVariantsInputSchema),
            z.lazy(() => CampaignUncheckedCreateWithoutVariantsInputSchema)
        ])
    })
    .strict()

export default CampaignCreateOrConnectWithoutVariantsInputSchema
