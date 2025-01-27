import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const PipelineStageScalarWhereInputSchema: z.ZodType<Prisma.PipelineStageScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => PipelineStageScalarWhereInputSchema), z.lazy(() => PipelineStageScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => PipelineStageScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => PipelineStageScalarWhereInputSchema), z.lazy(() => PipelineStageScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        pipelineId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        probability: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        color: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        icon: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isDefault: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        isFinal: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        isWon: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        isLost: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        autoMoveAfterDays: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        nextStageId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default PipelineStageScalarWhereInputSchema
