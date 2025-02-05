import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadScalarWhereInputSchema: z.ZodType<Prisma.LeadScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        endpointId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        data: z.lazy(() => JsonFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadScalarWhereInputSchema
