import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateNestedOneWithoutAccessUsersInputSchema } from './ReportCreateNestedOneWithoutAccessUsersInputSchema'
import { UserCreateNestedOneWithoutReportAccessInputSchema } from './UserCreateNestedOneWithoutReportAccessInputSchema'

export const ReportAccessCreateInputSchema: z.ZodType<Prisma.ReportAccessCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        accessType: z.string(),
        report: z.lazy(() => ReportCreateNestedOneWithoutAccessUsersInputSchema),
        user: z.lazy(() => UserCreateNestedOneWithoutReportAccessInputSchema)
    })
    .strict()

export default ReportAccessCreateInputSchema
