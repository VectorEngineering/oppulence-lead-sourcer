import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { DomainNullableRelationFilterSchema } from './DomainNullableRelationFilterSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'

export const RegisteredDomainWhereInputSchema: z.ZodType<Prisma.RegisteredDomainWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => RegisteredDomainWhereInputSchema), z.lazy(() => RegisteredDomainWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => RegisteredDomainWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => RegisteredDomainWhereInputSchema), z.lazy(() => RegisteredDomainWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        expiresAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        domainId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
        domain: z
            .union([z.lazy(() => DomainNullableRelationFilterSchema), z.lazy(() => DomainWhereInputSchema)])
            .optional()
            .nullable()
    })
    .strict()

export default RegisteredDomainWhereInputSchema
