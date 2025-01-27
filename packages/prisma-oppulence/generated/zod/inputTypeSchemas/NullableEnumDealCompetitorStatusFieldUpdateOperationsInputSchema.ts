import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema'

export const NullableEnumDealCompetitorStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumDealCompetitorStatusFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => DealCompetitorStatusSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumDealCompetitorStatusFieldUpdateOperationsInputSchema
