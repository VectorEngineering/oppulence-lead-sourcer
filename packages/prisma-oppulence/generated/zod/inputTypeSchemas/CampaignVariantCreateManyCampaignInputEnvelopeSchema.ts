import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantCreateManyCampaignInputSchema } from './CampaignVariantCreateManyCampaignInputSchema'

export const CampaignVariantCreateManyCampaignInputEnvelopeSchema: z.ZodType<Prisma.CampaignVariantCreateManyCampaignInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => CampaignVariantCreateManyCampaignInputSchema),
            z.lazy(() => CampaignVariantCreateManyCampaignInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default CampaignVariantCreateManyCampaignInputEnvelopeSchema
