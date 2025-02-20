import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const OAuthRefreshTokenScalarWhereInputSchema: z.ZodType<Prisma.OAuthRefreshTokenScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema), z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => OAuthRefreshTokenScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema), z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        installationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accessTokenId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        hashedRefreshToken: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expiresAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default OAuthRefreshTokenScalarWhereInputSchema
