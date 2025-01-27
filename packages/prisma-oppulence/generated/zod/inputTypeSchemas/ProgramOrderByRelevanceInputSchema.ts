import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramOrderByRelevanceFieldEnumSchema } from './ProgramOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramOrderByRelevanceInputSchema: z.ZodType<Prisma.ProgramOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ProgramOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ProgramOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ProgramOrderByRelevanceInputSchema
