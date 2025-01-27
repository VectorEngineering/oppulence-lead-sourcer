import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const LeadRequirementScalarWhereInputSchema: z.ZodType<Prisma.LeadRequirementScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadRequirementScalarWhereInputSchema), z.lazy(() => LeadRequirementScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadRequirementScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadRequirementScalarWhereInputSchema), z.lazy(() => LeadRequirementScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        category: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        priority: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        notes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LeadRequirementScalarWhereInputSchema
