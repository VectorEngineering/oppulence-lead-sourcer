import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const ReportAccessWhereInputSchema: z.ZodType<Prisma.ReportAccessWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ReportAccessWhereInputSchema), z.lazy(() => ReportAccessWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ReportAccessWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ReportAccessWhereInputSchema), z.lazy(() => ReportAccessWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accessType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        report: z.union([z.lazy(() => ReportRelationFilterSchema), z.lazy(() => ReportWhereInputSchema)]).optional(),
        user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional()
    })
    .strict()

export default ReportAccessWhereInputSchema
