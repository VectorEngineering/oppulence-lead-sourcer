import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema'
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema'

export const DealCompetitorCreateWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorCreateWithoutDealInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        strengths: z.string().optional().nullable(),
        weaknesses: z.string().optional().nullable(),
        strategy: z.string().optional().nullable(),
        status: z
            .lazy(() => DealCompetitorStatusSchema)
            .optional()
            .nullable(),
        threatLevel: z
            .lazy(() => DealCompetitorThreatLevelSchema)
            .optional()
            .nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default DealCompetitorCreateWithoutDealInputSchema
