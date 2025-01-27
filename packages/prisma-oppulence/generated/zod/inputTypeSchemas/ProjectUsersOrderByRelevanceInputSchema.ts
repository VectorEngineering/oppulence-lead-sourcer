import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUsersOrderByRelevanceFieldEnumSchema } from './ProjectUsersOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ProjectUsersOrderByRelevanceInputSchema: z.ZodType<Prisma.ProjectUsersOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ProjectUsersOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ProjectUsersOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ProjectUsersOrderByRelevanceInputSchema
