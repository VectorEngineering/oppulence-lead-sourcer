import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSocialProfileWhereInputSchema } from './LeadSocialProfileWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumLeadSocialPlatformFilterSchema } from './EnumLeadSocialPlatformFilterSchema'
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadSocialProfileWhereUniqueInputSchema: z.ZodType<Prisma.LeadSocialProfileWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => LeadSocialProfileWhereInputSchema), z.lazy(() => LeadSocialProfileWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => LeadSocialProfileWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => LeadSocialProfileWhereInputSchema), z.lazy(() => LeadSocialProfileWhereInputSchema).array()])
                    .optional(),
                leadId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                platform: z.union([z.lazy(() => EnumLeadSocialPlatformFilterSchema), z.lazy(() => LeadSocialPlatformSchema)]).optional(),
                profileUrl: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                username: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                lastSynced: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                lead: z.union([z.lazy(() => LeadRelationFilterSchema), z.lazy(() => LeadWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LeadSocialProfileWhereUniqueInputSchema
