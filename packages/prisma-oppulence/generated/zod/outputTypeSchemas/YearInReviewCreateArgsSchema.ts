import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { YearInReviewIncludeSchema } from '../inputTypeSchemas/YearInReviewIncludeSchema'
import { YearInReviewCreateInputSchema } from '../inputTypeSchemas/YearInReviewCreateInputSchema'
import { YearInReviewUncheckedCreateInputSchema } from '../inputTypeSchemas/YearInReviewUncheckedCreateInputSchema'
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

export const YearInReviewCreateArgsSchema: z.ZodType<Prisma.YearInReviewCreateArgs> = z
    .object({
        select: YearInReviewSelectSchema.optional(),
        include: YearInReviewIncludeSchema.optional(),
        data: z.union([YearInReviewCreateInputSchema, YearInReviewUncheckedCreateInputSchema])
    })
    .strict()

export default YearInReviewCreateArgsSchema
