import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadRiskWhereInputSchema: z.ZodType<Prisma.LeadRiskWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadRiskWhereInputSchema), z.lazy(() => LeadRiskWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadRiskWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadRiskWhereInputSchema), z.lazy(() => LeadRiskWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        category: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        impact: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        probability: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        mitigation: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
    })
    .strict()

export default LeadRiskWhereInputSchema
