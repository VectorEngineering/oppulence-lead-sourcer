import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'

export const CampaignVariantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CampaignVariantScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => CampaignVariantScalarWhereWithAggregatesInputSchema),
                z.lazy(() => CampaignVariantScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => CampaignVariantScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => CampaignVariantScalarWhereWithAggregatesInputSchema),
                z.lazy(() => CampaignVariantScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        campaignId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        content: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        metrics: z.lazy(() => JsonWithAggregatesFilterSchema).optional()
    })
    .strict()

export default CampaignVariantScalarWhereWithAggregatesInputSchema
