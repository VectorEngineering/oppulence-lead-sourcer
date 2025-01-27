import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationHistoryIncludeSchema } from '../inputTypeSchemas/LeadSegmentationHistoryIncludeSchema'
import { LeadSegmentationHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereUniqueInputSchema'
import { LeadSegmentationHistoryCreateInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryCreateInputSchema'
import { LeadSegmentationHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryUncheckedCreateInputSchema'
import { LeadSegmentationHistoryUpdateInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryUpdateInputSchema'
import { LeadSegmentationHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryUncheckedUpdateInputSchema'
import { LeadSegmentationArgsSchema } from './LeadSegmentationArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSegmentationHistorySelectSchema: z.ZodType<Prisma.LeadSegmentationHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        segmentationId: z.boolean().optional(),
        previousSegments: z.boolean().optional(),
        newSegments: z.boolean().optional(),
        reason: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        segmentation: z.union([z.boolean(), z.lazy(() => LeadSegmentationArgsSchema)]).optional()
    })
    .strict()

export const LeadSegmentationHistoryUpsertArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryUpsertArgs> = z
    .object({
        select: LeadSegmentationHistorySelectSchema.optional(),
        include: LeadSegmentationHistoryIncludeSchema.optional(),
        where: LeadSegmentationHistoryWhereUniqueInputSchema,
        create: z.union([LeadSegmentationHistoryCreateInputSchema, LeadSegmentationHistoryUncheckedCreateInputSchema]),
        update: z.union([LeadSegmentationHistoryUpdateInputSchema, LeadSegmentationHistoryUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadSegmentationHistoryUpsertArgsSchema
