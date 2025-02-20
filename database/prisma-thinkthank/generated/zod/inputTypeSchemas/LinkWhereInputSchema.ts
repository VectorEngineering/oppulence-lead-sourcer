import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { DomainNullableRelationFilterSchema } from './DomainNullableRelationFilterSchema'
import { DomainWhereInputSchema } from './DomainWhereInputSchema'
import { LinkTagListRelationFilterSchema } from './LinkTagListRelationFilterSchema'
import { LinkWebhookListRelationFilterSchema } from './LinkWebhookListRelationFilterSchema'
import { DashboardNullableRelationFilterSchema } from './DashboardNullableRelationFilterSchema'
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema'
import { ProgramEnrollmentNullableRelationFilterSchema } from './ProgramEnrollmentNullableRelationFilterSchema'
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema'
import { ProgramInviteNullableRelationFilterSchema } from './ProgramInviteNullableRelationFilterSchema'
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema'
import { ProgramNullableRelationFilterSchema } from './ProgramNullableRelationFilterSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { CustomerListRelationFilterSchema } from './CustomerListRelationFilterSchema'

export const LinkWhereInputSchema: z.ZodType<Prisma.LinkWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LinkWhereInputSchema), z.lazy(() => LinkWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LinkWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LinkWhereInputSchema), z.lazy(() => LinkWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        domain: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        key: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        shortLink: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        archived: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        expiredUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        trackConversion: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        proxy: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        title: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        image: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        video: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_source: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_medium: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_campaign: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_term: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_content: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        rewrite: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        doIndex: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        ios: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        android: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        geo: z.lazy(() => JsonNullableFilterSchema).optional(),
        userId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tenantId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        publicStats: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        clicks: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        lastClicked: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        leads: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        sales: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        saleAmount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        comments: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        programId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        user: z
            .union([z.lazy(() => UserNullableRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
            .optional()
            .nullable(),
        project: z
            .union([z.lazy(() => ProjectNullableRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
            .optional()
            .nullable(),
        projectDomain: z
            .union([z.lazy(() => DomainNullableRelationFilterSchema), z.lazy(() => DomainWhereInputSchema)])
            .optional()
            .nullable(),
        tags: z.lazy(() => LinkTagListRelationFilterSchema).optional(),
        webhooks: z.lazy(() => LinkWebhookListRelationFilterSchema).optional(),
        dashboard: z
            .union([z.lazy(() => DashboardNullableRelationFilterSchema), z.lazy(() => DashboardWhereInputSchema)])
            .optional()
            .nullable(),
        programEnrollment: z
            .union([z.lazy(() => ProgramEnrollmentNullableRelationFilterSchema), z.lazy(() => ProgramEnrollmentWhereInputSchema)])
            .optional()
            .nullable(),
        programInvite: z
            .union([z.lazy(() => ProgramInviteNullableRelationFilterSchema), z.lazy(() => ProgramInviteWhereInputSchema)])
            .optional()
            .nullable(),
        program: z
            .union([z.lazy(() => ProgramNullableRelationFilterSchema), z.lazy(() => ProgramWhereInputSchema)])
            .optional()
            .nullable(),
        customers: z.lazy(() => CustomerListRelationFilterSchema).optional()
    })
    .strict()

export default LinkWhereInputSchema
