import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumIntegrationTypeWithAggregatesFilterSchema } from './EnumIntegrationTypeWithAggregatesFilterSchema'
import { IntegrationTypeSchema } from './IntegrationTypeSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'

export const PipelineIntegrationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PipelineIntegrationScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => PipelineIntegrationScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => PipelineIntegrationScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => PipelineIntegrationScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => PipelineIntegrationScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => PipelineIntegrationScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            pipelineId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            type: z.union([z.lazy(() => EnumIntegrationTypeWithAggregatesFilterSchema), z.lazy(() => IntegrationTypeSchema)]).optional(),
            name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            provider: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            config: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            isActive: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
            lastSyncedAt: z
                .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
                .optional()
                .nullable()
        })
        .strict()

export default PipelineIntegrationScalarWhereWithAggregatesInputSchema
