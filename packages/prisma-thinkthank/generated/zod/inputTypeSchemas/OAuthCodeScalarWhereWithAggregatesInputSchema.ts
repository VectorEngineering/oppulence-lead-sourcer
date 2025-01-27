import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const OAuthCodeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OAuthCodeScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => OAuthCodeScalarWhereWithAggregatesInputSchema),
                z.lazy(() => OAuthCodeScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => OAuthCodeScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => OAuthCodeScalarWhereWithAggregatesInputSchema),
                z.lazy(() => OAuthCodeScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        clientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        code: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        scopes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        redirectUri: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        codeChallenge: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        codeChallengeMethod: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default OAuthCodeScalarWhereWithAggregatesInputSchema
