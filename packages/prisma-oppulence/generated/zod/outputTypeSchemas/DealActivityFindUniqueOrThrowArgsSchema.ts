import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealActivityIncludeSchema } from '../inputTypeSchemas/DealActivityIncludeSchema'
import { DealActivityWhereUniqueInputSchema } from '../inputTypeSchemas/DealActivityWhereUniqueInputSchema'
import { DealArgsSchema } from './DealArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealActivitySelectSchema: z.ZodType<Prisma.DealActivitySelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        type: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        outcome: z.boolean().optional(),
        duration: z.boolean().optional(),
        scheduledAt: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export const DealActivityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DealActivityFindUniqueOrThrowArgs> = z
    .object({
        select: DealActivitySelectSchema.optional(),
        include: DealActivityIncludeSchema.optional(),
        where: DealActivityWhereUniqueInputSchema
    })
    .strict()

export default DealActivityFindUniqueOrThrowArgsSchema
