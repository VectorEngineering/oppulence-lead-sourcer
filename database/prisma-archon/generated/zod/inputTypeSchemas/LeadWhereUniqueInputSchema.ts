import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EndpointRelationFilterSchema } from './EndpointRelationFilterSchema'
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema'

export const LeadWhereUniqueInputSchema: z.ZodType<Prisma.LeadWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z.union([z.lazy(() => LeadWhereInputSchema), z.lazy(() => LeadWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => LeadWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => LeadWhereInputSchema), z.lazy(() => LeadWhereInputSchema).array()]).optional(),
                endpointId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                data: z.lazy(() => JsonFilterSchema).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                endpoint: z.union([z.lazy(() => EndpointRelationFilterSchema), z.lazy(() => EndpointWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadWhereUniqueInputSchema
