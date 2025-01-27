import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumLeadSocialPlatformFilterSchema } from './EnumLeadSocialPlatformFilterSchema'
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'

export const LeadSocialProfileScalarWhereInputSchema: z.ZodType<Prisma.LeadSocialProfileScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadSocialProfileScalarWhereInputSchema), z.lazy(() => LeadSocialProfileScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadSocialProfileScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadSocialProfileScalarWhereInputSchema), z.lazy(() => LeadSocialProfileScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
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
            .nullable()
    })
    .strict()

export default LeadSocialProfileScalarWhereInputSchema
