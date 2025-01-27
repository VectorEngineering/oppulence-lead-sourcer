import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectOrderByRelevanceFieldEnumSchema } from './ProjectOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ProjectOrderByRelevanceInputSchema: z.ZodType<Prisma.ProjectOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ProjectOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ProjectOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ProjectOrderByRelevanceInputSchema
