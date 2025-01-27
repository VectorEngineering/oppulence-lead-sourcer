import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema'

export const NullableEnumDealCompetitorThreatLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumDealCompetitorThreatLevelFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => DealCompetitorThreatLevelSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumDealCompetitorThreatLevelFieldUpdateOperationsInputSchema
