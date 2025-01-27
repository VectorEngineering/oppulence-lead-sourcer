import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LinkOrderByRelationAggregateInputSchema } from './LinkOrderByRelationAggregateInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { RegisteredDomainOrderByWithRelationInputSchema } from './RegisteredDomainOrderByWithRelationInputSchema'
import { ProgramOrderByRelationAggregateInputSchema } from './ProgramOrderByRelationAggregateInputSchema'
import { DomainOrderByRelevanceInputSchema } from './DomainOrderByRelevanceInputSchema'

export const DomainOrderByWithRelationInputSchema: z.ZodType<Prisma.DomainOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        verified: z.lazy(() => SortOrderSchema).optional(),
        placeholder: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        expiredUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        notFoundUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        primary: z.lazy(() => SortOrderSchema).optional(),
        archived: z.lazy(() => SortOrderSchema).optional(),
        lastChecked: z.lazy(() => SortOrderSchema).optional(),
        logo: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        links: z.lazy(() => LinkOrderByRelationAggregateInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        registeredDomain: z.lazy(() => RegisteredDomainOrderByWithRelationInputSchema).optional(),
        programs: z.lazy(() => ProgramOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => DomainOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default DomainOrderByWithRelationInputSchema
