import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationIncludeSchema } from '../inputTypeSchemas/LeadSegmentationIncludeSchema'
import { LeadSegmentationWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereInputSchema'
import { LeadSegmentationOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadSegmentationOrderByWithRelationInputSchema'
import { LeadSegmentationWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereUniqueInputSchema'
import { LeadSegmentationScalarFieldEnumSchema } from '../inputTypeSchemas/LeadSegmentationScalarFieldEnumSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
import { LeadSegmentationHistoryFindManyArgsSchema } from './LeadSegmentationHistoryFindManyArgsSchema'
import { LeadSegmentationCountOutputTypeArgsSchema } from './LeadSegmentationCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSegmentationSelectSchema: z.ZodType<Prisma.LeadSegmentationSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        industrySegment: z.boolean().optional(),
        companySize: z.boolean().optional(),
        geographicRegion: z.boolean().optional(),
        purchaseHistory: z.boolean().optional(),
        productUsage: z.boolean().optional(),
        engagementLevel: z.boolean().optional(),
        decisionMaking: z.boolean().optional(),
        innovationLevel: z.boolean().optional(),
        riskTolerance: z.boolean().optional(),
        customerLifetimeValue: z.boolean().optional(),
        profitabilitySegment: z.boolean().optional(),
        growthPotential: z.boolean().optional(),
        segmentTags: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        segmentationHistory: z.union([z.boolean(), z.lazy(() => LeadSegmentationHistoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadSegmentationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadSegmentationFindFirstArgsSchema: z.ZodType<Prisma.LeadSegmentationFindFirstArgs> = z
    .object({
        select: LeadSegmentationSelectSchema.optional(),
        include: LeadSegmentationIncludeSchema.optional(),
        where: LeadSegmentationWhereInputSchema.optional(),
        orderBy: z
            .union([LeadSegmentationOrderByWithRelationInputSchema.array(), LeadSegmentationOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadSegmentationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadSegmentationScalarFieldEnumSchema, LeadSegmentationScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadSegmentationFindFirstArgsSchema
