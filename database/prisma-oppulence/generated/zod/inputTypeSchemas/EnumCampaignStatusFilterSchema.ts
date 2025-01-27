import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignStatusSchema } from './CampaignStatusSchema'
import { NestedEnumCampaignStatusFilterSchema } from './NestedEnumCampaignStatusFilterSchema'

export const EnumCampaignStatusFilterSchema: z.ZodType<Prisma.EnumCampaignStatusFilter> = z
    .object({
        equals: z.lazy(() => CampaignStatusSchema).optional(),
        in: z
            .lazy(() => CampaignStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => CampaignStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => CampaignStatusSchema), z.lazy(() => NestedEnumCampaignStatusFilterSchema)]).optional()
    })
    .strict()

export default EnumCampaignStatusFilterSchema
