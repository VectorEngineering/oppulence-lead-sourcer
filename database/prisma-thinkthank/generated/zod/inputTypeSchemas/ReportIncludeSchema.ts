import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { ReportFilterFindManyArgsSchema } from '../outputTypeSchemas/ReportFilterFindManyArgsSchema'
import { ReportSortingFindManyArgsSchema } from '../outputTypeSchemas/ReportSortingFindManyArgsSchema'
import { ReportColumnFindManyArgsSchema } from '../outputTypeSchemas/ReportColumnFindManyArgsSchema'
import { ReportScheduleFindManyArgsSchema } from '../outputTypeSchemas/ReportScheduleFindManyArgsSchema'
import { ReportRecipientFindManyArgsSchema } from '../outputTypeSchemas/ReportRecipientFindManyArgsSchema'
import { ReportAccessFindManyArgsSchema } from '../outputTypeSchemas/ReportAccessFindManyArgsSchema'
import { ReportCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportCountOutputTypeArgsSchema'

export const ReportIncludeSchema: z.ZodType<Prisma.ReportInclude> = z
    .object({
        creator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        filters: z.union([z.boolean(), z.lazy(() => ReportFilterFindManyArgsSchema)]).optional(),
        sortings: z.union([z.boolean(), z.lazy(() => ReportSortingFindManyArgsSchema)]).optional(),
        columns: z.union([z.boolean(), z.lazy(() => ReportColumnFindManyArgsSchema)]).optional(),
        schedules: z.union([z.boolean(), z.lazy(() => ReportScheduleFindManyArgsSchema)]).optional(),
        recipients: z.union([z.boolean(), z.lazy(() => ReportRecipientFindManyArgsSchema)]).optional(),
        accessUsers: z.union([z.boolean(), z.lazy(() => ReportAccessFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default ReportIncludeSchema
