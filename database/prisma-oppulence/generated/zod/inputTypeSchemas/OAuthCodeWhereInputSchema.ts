import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { OAuthAppRelationFilterSchema } from './OAuthAppRelationFilterSchema'
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const OAuthCodeWhereInputSchema: z.ZodType<Prisma.OAuthCodeWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => OAuthCodeWhereInputSchema), z.lazy(() => OAuthCodeWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => OAuthCodeWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => OAuthCodeWhereInputSchema), z.lazy(() => OAuthCodeWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        clientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        code: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        scopes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        redirectUri: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        codeChallenge: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        codeChallengeMethod: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        expiresAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        oAuthApp: z.union([z.lazy(() => OAuthAppRelationFilterSchema), z.lazy(() => OAuthAppWhereInputSchema)]).optional(),
        user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
        project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional()
    })
    .strict()

export default OAuthCodeWhereInputSchema
