import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewIncludeSchema } from '../inputTypeSchemas/YearInReviewIncludeSchema'
import { YearInReviewWhereInputSchema } from '../inputTypeSchemas/YearInReviewWhereInputSchema'
import { YearInReviewOrderByWithRelationInputSchema } from '../inputTypeSchemas/YearInReviewOrderByWithRelationInputSchema'
import { YearInReviewWhereUniqueInputSchema } from '../inputTypeSchemas/YearInReviewWhereUniqueInputSchema'
import { YearInReviewScalarFieldEnumSchema } from '../inputTypeSchemas/YearInReviewScalarFieldEnumSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const YearInReviewSelectSchema: z.ZodType<Prisma.YearInReviewSelect> = z
    .object({
        id: z.boolean().optional(),
        year: z.boolean().optional(),
        totalLinks: z.boolean().optional(),
        totalClicks: z.boolean().optional(),
        topLinks: z.boolean().optional(),
        topCountries: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        sentAt: z.boolean().optional(),
        workspace: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const YearInReviewFindFirstArgsSchema: z.ZodType<Prisma.YearInReviewFindFirstArgs> = z
    .object({
        select: YearInReviewSelectSchema.optional(),
        include: YearInReviewIncludeSchema.optional(),
        where: YearInReviewWhereInputSchema.optional(),
        orderBy: z.union([YearInReviewOrderByWithRelationInputSchema.array(), YearInReviewOrderByWithRelationInputSchema]).optional(),
        cursor: YearInReviewWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([YearInReviewScalarFieldEnumSchema, YearInReviewScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default YearInReviewFindFirstArgsSchema
