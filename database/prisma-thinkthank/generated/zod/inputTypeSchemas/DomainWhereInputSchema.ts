import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LinkListRelationFilterSchema } from './LinkListRelationFilterSchema'
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { RegisteredDomainNullableRelationFilterSchema } from './RegisteredDomainNullableRelationFilterSchema'
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema'
import { ProgramListRelationFilterSchema } from './ProgramListRelationFilterSchema'

export const DomainWhereInputSchema: z.ZodType<Prisma.DomainWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DomainWhereInputSchema), z.lazy(() => DomainWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DomainWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DomainWhereInputSchema), z.lazy(() => DomainWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        verified: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        placeholder: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        expiredUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        notFoundUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        primary: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        archived: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        lastChecked: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        logo: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        links: z.lazy(() => LinkListRelationFilterSchema).optional(),
        project: z
            .union([z.lazy(() => ProjectNullableRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
            .optional()
            .nullable(),
        registeredDomain: z
            .union([z.lazy(() => RegisteredDomainNullableRelationFilterSchema), z.lazy(() => RegisteredDomainWhereInputSchema)])
            .optional()
            .nullable(),
        programs: z.lazy(() => ProgramListRelationFilterSchema).optional()
    })
    .strict()

export default DomainWhereInputSchema
