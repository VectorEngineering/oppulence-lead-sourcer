import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignCountOutputTypeSelectSchema } from './CampaignCountOutputTypeSelectSchema'

export const CampaignCountOutputTypeArgsSchema: z.ZodType<Prisma.CampaignCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => CampaignCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default CampaignCountOutputTypeSelectSchema
