import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InboxOrderByWithRelationInputSchema } from './InboxOrderByWithRelationInputSchema'
import { InboxShareOrderByRelevanceInputSchema } from './InboxShareOrderByRelevanceInputSchema'

export const InboxShareOrderByWithRelationInputSchema: z.ZodType<Prisma.InboxShareOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        inboxId: z.lazy(() => SortOrderSchema).optional(),
        userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        accessLevel: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        lastAccessed: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        accessCount: z.lazy(() => SortOrderSchema).optional(),
        maxAccesses: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ipRestriction: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        domainRestriction: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        deviceLimit: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        requireMFA: z.lazy(() => SortOrderSchema).optional(),
        notifyOnAccess: z.lazy(() => SortOrderSchema).optional(),
        accessSchedule: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        revokedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        revokedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        revokeReason: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        inbox: z.lazy(() => InboxOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => InboxShareOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default InboxShareOrderByWithRelationInputSchema
