import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationHistoryIncludeSchema } from '../inputTypeSchemas/LeadSegmentationHistoryIncludeSchema'
import { LeadSegmentationHistoryWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereInputSchema'
import { LeadSegmentationHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryOrderByWithRelationInputSchema'
import { LeadSegmentationHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereUniqueInputSchema'
import { LeadSegmentationHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadSegmentationHistoryScalarFieldEnumSchema'
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

export const LeadSegmentationHistoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryFindFirstOrThrowArgs> = z
    .object({
        select: LeadSegmentationHistorySelectSchema.optional(),
        include: LeadSegmentationHistoryIncludeSchema.optional(),
        where: LeadSegmentationHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([LeadSegmentationHistoryOrderByWithRelationInputSchema.array(), LeadSegmentationHistoryOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadSegmentationHistoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadSegmentationHistoryScalarFieldEnumSchema, LeadSegmentationHistoryScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadSegmentationHistoryFindFirstOrThrowArgsSchema
