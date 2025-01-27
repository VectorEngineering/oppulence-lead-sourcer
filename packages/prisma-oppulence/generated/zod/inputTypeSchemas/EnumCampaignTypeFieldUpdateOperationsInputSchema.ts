import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignTypeSchema } from './CampaignTypeSchema'

export const EnumCampaignTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCampaignTypeFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => CampaignTypeSchema).optional()
    })
    .strict()

export default EnumCampaignTypeFieldUpdateOperationsInputSchema
