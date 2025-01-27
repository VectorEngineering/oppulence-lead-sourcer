import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantCreateWithoutCampaignInputSchema } from './CampaignVariantCreateWithoutCampaignInputSchema'
import { CampaignVariantUncheckedCreateWithoutCampaignInputSchema } from './CampaignVariantUncheckedCreateWithoutCampaignInputSchema'
import { CampaignVariantCreateOrConnectWithoutCampaignInputSchema } from './CampaignVariantCreateOrConnectWithoutCampaignInputSchema'
import { CampaignVariantCreateManyCampaignInputEnvelopeSchema } from './CampaignVariantCreateManyCampaignInputEnvelopeSchema'
import { CampaignVariantWhereUniqueInputSchema } from './CampaignVariantWhereUniqueInputSchema'

export const CampaignVariantUncheckedCreateNestedManyWithoutCampaignInputSchema: z.ZodType<Prisma.CampaignVariantUncheckedCreateNestedManyWithoutCampaignInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => CampaignVariantCreateWithoutCampaignInputSchema),
                    z.lazy(() => CampaignVariantCreateWithoutCampaignInputSchema).array(),
                    z.lazy(() => CampaignVariantUncheckedCreateWithoutCampaignInputSchema),
                    z.lazy(() => CampaignVariantUncheckedCreateWithoutCampaignInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => CampaignVariantCreateOrConnectWithoutCampaignInputSchema),
                    z.lazy(() => CampaignVariantCreateOrConnectWithoutCampaignInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => CampaignVariantCreateManyCampaignInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => CampaignVariantWhereUniqueInputSchema), z.lazy(() => CampaignVariantWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default CampaignVariantUncheckedCreateNestedManyWithoutCampaignInputSchema
