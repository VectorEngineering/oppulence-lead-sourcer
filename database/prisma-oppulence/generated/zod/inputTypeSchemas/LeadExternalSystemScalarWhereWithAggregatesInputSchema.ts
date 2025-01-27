import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumLeadExternalSystemProviderWithAggregatesFilterSchema } from './EnumLeadExternalSystemProviderWithAggregatesFilterSchema'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'

export const LeadExternalSystemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadExternalSystemScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadExternalSystemScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadExternalSystemScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadExternalSystemScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadExternalSystemScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LeadExternalSystemScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        provider: z
            .union([z.lazy(() => EnumLeadExternalSystemProviderWithAggregatesFilterSchema), z.lazy(() => LeadExternalSystemProviderSchema)])
            .optional(),
        externalId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        lastSynced: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        syncStatus: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        errorMessage: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LeadExternalSystemScalarWhereWithAggregatesInputSchema
