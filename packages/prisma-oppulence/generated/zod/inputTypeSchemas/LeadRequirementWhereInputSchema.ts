import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadRequirementWhereInputSchema: z.ZodType<Prisma.LeadRequirementWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LeadRequirementWhereInputSchema), z.lazy(() => LeadRequirementWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LeadRequirementWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LeadRequirementWhereInputSchema), z.lazy(() => LeadRequirementWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        category: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        priority: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        notes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
    })
    .strict()

export default LeadRequirementWhereInputSchema
