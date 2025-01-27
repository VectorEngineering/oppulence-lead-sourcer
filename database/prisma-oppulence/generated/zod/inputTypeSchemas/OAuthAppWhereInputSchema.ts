import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { OAuthCodeListRelationFilterSchema } from './OAuthCodeListRelationFilterSchema'
import { IntegrationNullableRelationFilterSchema } from './IntegrationNullableRelationFilterSchema'
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema'

export const OAuthAppWhereInputSchema: z.ZodType<Prisma.OAuthAppWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => OAuthAppWhereInputSchema), z.lazy(() => OAuthAppWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => OAuthAppWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => OAuthAppWhereInputSchema), z.lazy(() => OAuthAppWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        integrationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        clientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        hashedClientSecret: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        partialClientSecret: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        redirectUris: z.lazy(() => JsonFilterSchema).optional(),
        pkce: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        oAuthCodes: z.lazy(() => OAuthCodeListRelationFilterSchema).optional(),
        integration: z
            .union([z.lazy(() => IntegrationNullableRelationFilterSchema), z.lazy(() => IntegrationWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default OAuthAppWhereInputSchema
