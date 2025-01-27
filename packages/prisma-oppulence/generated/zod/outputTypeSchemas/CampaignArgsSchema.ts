import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignSelectSchema } from '../inputTypeSchemas/CampaignSelectSchema'
import { CampaignIncludeSchema } from '../inputTypeSchemas/CampaignIncludeSchema'

export const CampaignArgsSchema: z.ZodType<Prisma.CampaignDefaultArgs> = z
    .object({
        select: z.lazy(() => CampaignSelectSchema).optional(),
        include: z.lazy(() => CampaignIncludeSchema).optional()
    })
    .strict()

export default CampaignArgsSchema
