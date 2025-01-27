import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'

export const InstalledIntegrationScalarWhereInputSchema: z.ZodType<Prisma.InstalledIntegrationScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InstalledIntegrationScalarWhereInputSchema),
                z.lazy(() => InstalledIntegrationScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InstalledIntegrationScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InstalledIntegrationScalarWhereInputSchema),
                z.lazy(() => InstalledIntegrationScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        integrationId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        credentials: z.lazy(() => JsonNullableFilterSchema).optional()
    })
    .strict()

export default InstalledIntegrationScalarWhereInputSchema
