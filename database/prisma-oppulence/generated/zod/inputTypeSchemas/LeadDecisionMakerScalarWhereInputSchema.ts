import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const LeadDecisionMakerScalarWhereInputSchema: z.ZodType<Prisma.LeadDecisionMakerScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadDecisionMakerScalarWhereInputSchema), z.lazy(() => LeadDecisionMakerScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadDecisionMakerScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadDecisionMakerScalarWhereInputSchema), z.lazy(() => LeadDecisionMakerScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        title: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        email: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        phone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        influence: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        notes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LeadDecisionMakerScalarWhereInputSchema
