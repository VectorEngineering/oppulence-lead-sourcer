import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumIntegrationTypeFilterSchema } from './EnumIntegrationTypeFilterSchema'
import { IntegrationTypeSchema } from './IntegrationTypeSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'

export const PipelineIntegrationScalarWhereInputSchema: z.ZodType<Prisma.PipelineIntegrationScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => PipelineIntegrationScalarWhereInputSchema),
                z.lazy(() => PipelineIntegrationScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => PipelineIntegrationScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PipelineIntegrationScalarWhereInputSchema),
                z.lazy(() => PipelineIntegrationScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        pipelineId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumIntegrationTypeFilterSchema), z.lazy(() => IntegrationTypeSchema)]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        config: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        lastSyncedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default PipelineIntegrationScalarWhereInputSchema
