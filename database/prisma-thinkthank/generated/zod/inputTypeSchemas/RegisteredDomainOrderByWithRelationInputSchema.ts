import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { DomainOrderByWithRelationInputSchema } from './DomainOrderByWithRelationInputSchema'
import { RegisteredDomainOrderByRelevanceInputSchema } from './RegisteredDomainOrderByRelevanceInputSchema'

export const RegisteredDomainOrderByWithRelationInputSchema: z.ZodType<Prisma.RegisteredDomainOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        domainId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        domain: z.lazy(() => DomainOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => RegisteredDomainOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default RegisteredDomainOrderByWithRelationInputSchema
