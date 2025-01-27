import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataLeadIdKeyCompoundUniqueInputSchema } from './LeadMetadataLeadIdKeyCompoundUniqueInputSchema'
import { LeadMetadataWhereInputSchema } from './LeadMetadataWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadMetadataWhereUniqueInputSchema: z.ZodType<Prisma.LeadMetadataWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            leadId_key: z.lazy(() => LeadMetadataLeadIdKeyCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            leadId_key: z.lazy(() => LeadMetadataLeadIdKeyCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                leadId_key: z.lazy(() => LeadMetadataLeadIdKeyCompoundUniqueInputSchema).optional(),
                AND: z.union([z.lazy(() => LeadMetadataWhereInputSchema), z.lazy(() => LeadMetadataWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => LeadMetadataWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => LeadMetadataWhereInputSchema), z.lazy(() => LeadMetadataWhereInputSchema).array()]).optional(),
                leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                key: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                category: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                description: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                isSearchable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadMetadataWhereUniqueInputSchema
