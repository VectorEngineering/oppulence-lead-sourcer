import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumKpiTypeWithAggregatesFilterSchema } from './EnumKpiTypeWithAggregatesFilterSchema'
import { KpiTypeSchema } from './KpiTypeSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { EnumPipelineKpiUnitWithAggregatesFilterSchema } from './EnumPipelineKpiUnitWithAggregatesFilterSchema'
import { PipelineKpiUnitSchema } from './PipelineKpiUnitSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumPipelineKpiFrequencyWithAggregatesFilterSchema } from './EnumPipelineKpiFrequencyWithAggregatesFilterSchema'
import { PipelineKpiFrequencySchema } from './PipelineKpiFrequencySchema'
import { EnumPipelineKpiCalculationWithAggregatesFilterSchema } from './EnumPipelineKpiCalculationWithAggregatesFilterSchema'
import { PipelineKpiCalculationSchema } from './PipelineKpiCalculationSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const PipelineKpiScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PipelineKpiScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => PipelineKpiScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PipelineKpiScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => PipelineKpiScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PipelineKpiScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PipelineKpiScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        pipelineId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumKpiTypeWithAggregatesFilterSchema), z.lazy(() => KpiTypeSchema)]).optional(),
        target: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
        current: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        unit: z.union([z.lazy(() => EnumPipelineKpiUnitWithAggregatesFilterSchema), z.lazy(() => PipelineKpiUnitSchema)]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        frequency: z
            .union([z.lazy(() => EnumPipelineKpiFrequencyWithAggregatesFilterSchema), z.lazy(() => PipelineKpiFrequencySchema)])
            .optional(),
        calculation: z
            .union([z.lazy(() => EnumPipelineKpiCalculationWithAggregatesFilterSchema), z.lazy(() => PipelineKpiCalculationSchema)])
            .optional(),
        formula: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default PipelineKpiScalarWhereWithAggregatesInputSchema
