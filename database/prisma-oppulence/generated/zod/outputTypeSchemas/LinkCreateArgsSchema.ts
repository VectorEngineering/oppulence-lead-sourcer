import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkIncludeSchema } from '../inputTypeSchemas/LinkIncludeSchema'
import { LinkCreateInputSchema } from '../inputTypeSchemas/LinkCreateInputSchema'
import { LinkUncheckedCreateInputSchema } from '../inputTypeSchemas/LinkUncheckedCreateInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { DomainArgsSchema } from './DomainArgsSchema'
import { LinkTagFindManyArgsSchema } from './LinkTagFindManyArgsSchema'
import { LinkWebhookFindManyArgsSchema } from './LinkWebhookFindManyArgsSchema'
import { DashboardArgsSchema } from './DashboardArgsSchema'
import { ProgramEnrollmentArgsSchema } from './ProgramEnrollmentArgsSchema'
import { ProgramInviteArgsSchema } from './ProgramInviteArgsSchema'
import { ProgramArgsSchema } from './ProgramArgsSchema'
import { CustomerFindManyArgsSchema } from './CustomerFindManyArgsSchema'
import { LinkCountOutputTypeArgsSchema } from './LinkCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LinkSelectSchema: z.ZodType<Prisma.LinkSelect> = z
    .object({
        id: z.boolean().optional(),
        domain: z.boolean().optional(),
        key: z.boolean().optional(),
        url: z.boolean().optional(),
        shortLink: z.boolean().optional(),
        archived: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        expiredUrl: z.boolean().optional(),
        password: z.boolean().optional(),
        trackConversion: z.boolean().optional(),
        proxy: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        image: z.boolean().optional(),
        video: z.boolean().optional(),
        utm_source: z.boolean().optional(),
        utm_medium: z.boolean().optional(),
        utm_campaign: z.boolean().optional(),
        utm_term: z.boolean().optional(),
        utm_content: z.boolean().optional(),
        rewrite: z.boolean().optional(),
        doIndex: z.boolean().optional(),
        ios: z.boolean().optional(),
        android: z.boolean().optional(),
        geo: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        externalId: z.boolean().optional(),
        tenantId: z.boolean().optional(),
        publicStats: z.boolean().optional(),
        clicks: z.boolean().optional(),
        lastClicked: z.boolean().optional(),
        leads: z.boolean().optional(),
        sales: z.boolean().optional(),
        saleAmount: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        comments: z.boolean().optional(),
        programId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        projectDomain: z.union([z.boolean(), z.lazy(() => DomainArgsSchema)]).optional(),
        tags: z.union([z.boolean(), z.lazy(() => LinkTagFindManyArgsSchema)]).optional(),
        webhooks: z.union([z.boolean(), z.lazy(() => LinkWebhookFindManyArgsSchema)]).optional(),
        dashboard: z.union([z.boolean(), z.lazy(() => DashboardArgsSchema)]).optional(),
        programEnrollment: z.union([z.boolean(), z.lazy(() => ProgramEnrollmentArgsSchema)]).optional(),
        programInvite: z.union([z.boolean(), z.lazy(() => ProgramInviteArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        customers: z.union([z.boolean(), z.lazy(() => CustomerFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LinkCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LinkCreateArgsSchema: z.ZodType<Prisma.LinkCreateArgs> = z
    .object({
        select: LinkSelectSchema.optional(),
        include: LinkIncludeSchema.optional(),
        data: z.union([LinkCreateInputSchema, LinkUncheckedCreateInputSchema])
    })
    .strict()

export default LinkCreateArgsSchema
