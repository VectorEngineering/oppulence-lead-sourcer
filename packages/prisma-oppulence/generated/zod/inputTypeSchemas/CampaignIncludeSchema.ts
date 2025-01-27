import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadFindManyArgsSchema } from '../outputTypeSchemas/LeadFindManyArgsSchema'
import { LeadTouchpointFindManyArgsSchema } from '../outputTypeSchemas/LeadTouchpointFindManyArgsSchema'
import { CampaignVariantFindManyArgsSchema } from '../outputTypeSchemas/CampaignVariantFindManyArgsSchema'
import { CampaignCountOutputTypeArgsSchema } from '../outputTypeSchemas/CampaignCountOutputTypeArgsSchema'

export const CampaignIncludeSchema: z.ZodType<Prisma.CampaignInclude> = z
    .object({
        leads: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        touchpoints: z.union([z.boolean(), z.lazy(() => LeadTouchpointFindManyArgsSchema)]).optional(),
        variants: z.union([z.boolean(), z.lazy(() => CampaignVariantFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default CampaignIncludeSchema
