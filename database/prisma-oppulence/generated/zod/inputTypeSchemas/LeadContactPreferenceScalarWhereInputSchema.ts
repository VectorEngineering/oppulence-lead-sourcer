import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'

export const LeadContactPreferenceScalarWhereInputSchema: z.ZodType<Prisma.LeadContactPreferenceScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadContactPreferenceScalarWhereInputSchema),
                z.lazy(() => LeadContactPreferenceScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadContactPreferenceScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadContactPreferenceScalarWhereInputSchema),
                z.lazy(() => LeadContactPreferenceScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        method: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        preferredTime: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        preferredDays: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        timezone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        notes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isActive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional()
    })
    .strict()

export default LeadContactPreferenceScalarWhereInputSchema
