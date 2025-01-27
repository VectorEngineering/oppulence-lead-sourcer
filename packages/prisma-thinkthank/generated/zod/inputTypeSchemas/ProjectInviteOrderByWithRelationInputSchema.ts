import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { ProjectInviteOrderByRelevanceInputSchema } from './ProjectInviteOrderByRelevanceInputSchema'

export const ProjectInviteOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectInviteOrderByWithRelationInput> = z
    .object({
        email: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => ProjectInviteOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ProjectInviteOrderByWithRelationInputSchema
