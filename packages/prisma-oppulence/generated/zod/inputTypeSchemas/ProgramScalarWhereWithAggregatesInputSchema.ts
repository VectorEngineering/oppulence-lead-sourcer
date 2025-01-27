import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumProgramTypeWithAggregatesFilterSchema } from './EnumProgramTypeWithAggregatesFilterSchema'
import { ProgramTypeSchema } from './ProgramTypeSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { EnumCommissionTypeWithAggregatesFilterSchema } from './EnumCommissionTypeWithAggregatesFilterSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { EnumCommissionIntervalNullableWithAggregatesFilterSchema } from './EnumCommissionIntervalNullableWithAggregatesFilterSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const ProgramScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProgramScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ProgramScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        logo: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        wordmark: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        brandColor: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        domain: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        url: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => EnumProgramTypeWithAggregatesFilterSchema), z.lazy(() => ProgramTypeSchema)]).optional(),
        cookieLength: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        commissionAmount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        commissionType: z
            .union([z.lazy(() => EnumCommissionTypeWithAggregatesFilterSchema), z.lazy(() => CommissionTypeSchema)])
            .optional(),
        commissionDuration: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        commissionInterval: z
            .union([z.lazy(() => EnumCommissionIntervalNullableWithAggregatesFilterSchema), z.lazy(() => CommissionIntervalSchema)])
            .optional()
            .nullable(),
        landerData: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default ProgramScalarWhereWithAggregatesInputSchema
