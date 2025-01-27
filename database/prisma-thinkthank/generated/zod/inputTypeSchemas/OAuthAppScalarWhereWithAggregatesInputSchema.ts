import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'

export const OAuthAppScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OAuthAppScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => OAuthAppScalarWhereWithAggregatesInputSchema),
                z.lazy(() => OAuthAppScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => OAuthAppScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => OAuthAppScalarWhereWithAggregatesInputSchema),
                z.lazy(() => OAuthAppScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        integrationId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        clientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        hashedClientSecret: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        partialClientSecret: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        redirectUris: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
        pkce: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional()
    })
    .strict()

export default OAuthAppScalarWhereWithAggregatesInputSchema
