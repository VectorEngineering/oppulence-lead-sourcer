import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommentWhereInputSchema } from './LeadCommentWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadCommentWhereUniqueInputSchema: z.ZodType<Prisma.LeadCommentWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z.union([z.lazy(() => LeadCommentWhereInputSchema), z.lazy(() => LeadCommentWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => LeadCommentWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => LeadCommentWhereInputSchema), z.lazy(() => LeadCommentWhereInputSchema).array()]).optional(),
                leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                type: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                visibility: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                createdBy: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadCommentWhereUniqueInputSchema
