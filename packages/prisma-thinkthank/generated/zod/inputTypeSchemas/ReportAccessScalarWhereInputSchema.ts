import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'

export const ReportAccessScalarWhereInputSchema: z.ZodType<Prisma.ReportAccessScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => ReportAccessScalarWhereInputSchema), z.lazy(() => ReportAccessScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => ReportAccessScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => ReportAccessScalarWhereInputSchema), z.lazy(() => ReportAccessScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        reportId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        accessType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict()

export default ReportAccessScalarWhereInputSchema
