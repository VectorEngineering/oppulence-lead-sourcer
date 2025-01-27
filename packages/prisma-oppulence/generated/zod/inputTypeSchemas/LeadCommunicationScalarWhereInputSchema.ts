import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadCommunicationScalarWhereInputSchema: z.ZodType<Prisma.LeadCommunicationScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadCommunicationScalarWhereInputSchema), z.lazy(() => LeadCommunicationScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadCommunicationScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadCommunicationScalarWhereInputSchema), z.lazy(() => LeadCommunicationScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        direction: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        subject: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        outcome: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        duration: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        scheduledAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        completedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadCommunicationScalarWhereInputSchema
