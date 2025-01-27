import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const CampaignVariantCreateManyInputSchema: z.ZodType<Prisma.CampaignVariantCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        campaignId: z.string(),
        name: z.string(),
        description: z.string().optional().nullable(),
        content: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        metrics: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema])
    })
    .strict()

export default CampaignVariantCreateManyInputSchema
