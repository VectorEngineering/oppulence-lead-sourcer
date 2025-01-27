import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealHistoryIncludeSchema } from '../inputTypeSchemas/DealHistoryIncludeSchema'
import { DealHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/DealHistoryWhereUniqueInputSchema'
import { DealHistoryCreateInputSchema } from '../inputTypeSchemas/DealHistoryCreateInputSchema'
import { DealHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/DealHistoryUncheckedCreateInputSchema'
import { DealHistoryUpdateInputSchema } from '../inputTypeSchemas/DealHistoryUpdateInputSchema'
import { DealHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/DealHistoryUncheckedUpdateInputSchema'
import { DealArgsSchema } from './DealArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealHistorySelectSchema: z.ZodType<Prisma.DealHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        field: z.boolean().optional(),
        oldValue: z.boolean().optional(),
        newValue: z.boolean().optional(),
        description: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export const DealHistoryUpsertArgsSchema: z.ZodType<Prisma.DealHistoryUpsertArgs> = z
    .object({
        select: DealHistorySelectSchema.optional(),
        include: DealHistoryIncludeSchema.optional(),
        where: DealHistoryWhereUniqueInputSchema,
        create: z.union([DealHistoryCreateInputSchema, DealHistoryUncheckedCreateInputSchema]),
        update: z.union([DealHistoryUpdateInputSchema, DealHistoryUncheckedUpdateInputSchema])
    })
    .strict()

export default DealHistoryUpsertArgsSchema
