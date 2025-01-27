import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const PipelineStageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PipelineStageScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => PipelineStageScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PipelineStageScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => PipelineStageScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PipelineStageScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PipelineStageScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        pipelineId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        order: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        probability: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        color: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        icon: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        isFinal: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        isWon: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        isLost: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        autoMoveAfterDays: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        nextStageId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default PipelineStageScalarWhereWithAggregatesInputSchema
