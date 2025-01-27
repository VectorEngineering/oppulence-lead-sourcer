import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageDurationOrderByRelevanceFieldEnumSchema } from './StageDurationOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const StageDurationOrderByRelevanceInputSchema: z.ZodType<Prisma.StageDurationOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => StageDurationOrderByRelevanceFieldEnumSchema),
            z.lazy(() => StageDurationOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default StageDurationOrderByRelevanceInputSchema
