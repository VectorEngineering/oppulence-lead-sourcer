import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { DomainArgsSchema } from '../outputTypeSchemas/DomainArgsSchema'
import { LinkTagFindManyArgsSchema } from '../outputTypeSchemas/LinkTagFindManyArgsSchema'
import { LinkWebhookFindManyArgsSchema } from '../outputTypeSchemas/LinkWebhookFindManyArgsSchema'
import { DashboardArgsSchema } from '../outputTypeSchemas/DashboardArgsSchema'
import { ProgramEnrollmentArgsSchema } from '../outputTypeSchemas/ProgramEnrollmentArgsSchema'
import { ProgramInviteArgsSchema } from '../outputTypeSchemas/ProgramInviteArgsSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { CustomerFindManyArgsSchema } from '../outputTypeSchemas/CustomerFindManyArgsSchema'
import { LinkCountOutputTypeArgsSchema } from '../outputTypeSchemas/LinkCountOutputTypeArgsSchema'

export const LinkIncludeSchema: z.ZodType<Prisma.LinkInclude> = z
    .object({
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

export default LinkIncludeSchema
