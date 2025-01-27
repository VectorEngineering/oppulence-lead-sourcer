import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignCreateWithoutVariantsInputSchema } from './CampaignCreateWithoutVariantsInputSchema'
import { CampaignUncheckedCreateWithoutVariantsInputSchema } from './CampaignUncheckedCreateWithoutVariantsInputSchema'
import { CampaignCreateOrConnectWithoutVariantsInputSchema } from './CampaignCreateOrConnectWithoutVariantsInputSchema'
import { CampaignWhereUniqueInputSchema } from './CampaignWhereUniqueInputSchema'

export const CampaignCreateNestedOneWithoutVariantsInputSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutVariantsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => CampaignCreateWithoutVariantsInputSchema),
                z.lazy(() => CampaignUncheckedCreateWithoutVariantsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutVariantsInputSchema).optional(),
        connect: z.lazy(() => CampaignWhereUniqueInputSchema).optional()
    })
    .strict()

export default CampaignCreateNestedOneWithoutVariantsInputSchema
