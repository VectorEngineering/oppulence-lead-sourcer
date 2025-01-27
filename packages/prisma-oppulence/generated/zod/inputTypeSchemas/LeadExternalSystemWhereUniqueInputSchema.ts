import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema } from './LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema'
import { LeadExternalSystemWhereInputSchema } from './LeadExternalSystemWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumLeadExternalSystemProviderFilterSchema } from './EnumLeadExternalSystemProviderFilterSchema'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadExternalSystemWhereUniqueInputSchema: z.ZodType<Prisma.LeadExternalSystemWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            leadId_provider: z.lazy(() => LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            leadId_provider: z.lazy(() => LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                leadId_provider: z.lazy(() => LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema).optional(),
                AND: z
                    .union([z.lazy(() => LeadExternalSystemWhereInputSchema), z.lazy(() => LeadExternalSystemWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => LeadExternalSystemWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => LeadExternalSystemWhereInputSchema), z.lazy(() => LeadExternalSystemWhereInputSchema).array()])
                    .optional(),
                leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                provider: z
                    .union([z.lazy(() => EnumLeadExternalSystemProviderFilterSchema), z.lazy(() => LeadExternalSystemProviderSchema)])
                    .optional(),
                externalId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                lastSynced: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                syncStatus: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                errorMessage: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadExternalSystemWhereUniqueInputSchema
