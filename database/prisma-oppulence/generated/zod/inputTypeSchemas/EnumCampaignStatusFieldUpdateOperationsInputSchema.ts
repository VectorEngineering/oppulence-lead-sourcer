import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignStatusSchema } from './CampaignStatusSchema'

export const EnumCampaignStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCampaignStatusFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => CampaignStatusSchema).optional()
    })
    .strict()

export default EnumCampaignStatusFieldUpdateOperationsInputSchema
