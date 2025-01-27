import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { CampaignCreateNestedOneWithoutVariantsInputSchema } from './CampaignCreateNestedOneWithoutVariantsInputSchema'

export const CampaignVariantCreateInputSchema: z.ZodType<Prisma.CampaignVariantCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        content: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        metrics: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        campaign: z.lazy(() => CampaignCreateNestedOneWithoutVariantsInputSchema)
    })
    .strict()

export default CampaignVariantCreateInputSchema
