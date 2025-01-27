import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignUpdateWithoutVariantsInputSchema } from './CampaignUpdateWithoutVariantsInputSchema'
import { CampaignUncheckedUpdateWithoutVariantsInputSchema } from './CampaignUncheckedUpdateWithoutVariantsInputSchema'
import { CampaignCreateWithoutVariantsInputSchema } from './CampaignCreateWithoutVariantsInputSchema'
import { CampaignUncheckedCreateWithoutVariantsInputSchema } from './CampaignUncheckedCreateWithoutVariantsInputSchema'
import { CampaignWhereInputSchema } from './CampaignWhereInputSchema'

export const CampaignUpsertWithoutVariantsInputSchema: z.ZodType<Prisma.CampaignUpsertWithoutVariantsInput> = z
    .object({
        update: z.union([
            z.lazy(() => CampaignUpdateWithoutVariantsInputSchema),
            z.lazy(() => CampaignUncheckedUpdateWithoutVariantsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => CampaignCreateWithoutVariantsInputSchema),
            z.lazy(() => CampaignUncheckedCreateWithoutVariantsInputSchema)
        ]),
        where: z.lazy(() => CampaignWhereInputSchema).optional()
    })
    .strict()

export default CampaignUpsertWithoutVariantsInputSchema
