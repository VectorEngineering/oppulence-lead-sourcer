import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramIncludeSchema } from '../inputTypeSchemas/ProgramIncludeSchema'
import { ProgramWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramWhereUniqueInputSchema'
import { DiscountFindManyArgsSchema } from './DiscountFindManyArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { DomainArgsSchema } from './DomainArgsSchema'
import { ProgramEnrollmentFindManyArgsSchema } from './ProgramEnrollmentFindManyArgsSchema'
import { PayoutFindManyArgsSchema } from './PayoutFindManyArgsSchema'
import { SaleFindManyArgsSchema } from './SaleFindManyArgsSchema'
import { InvoiceFindManyArgsSchema } from './InvoiceFindManyArgsSchema'
import { ProgramResourceFindManyArgsSchema } from './ProgramResourceFindManyArgsSchema'
import { ProgramApplicationFindManyArgsSchema } from './ProgramApplicationFindManyArgsSchema'
import { ProgramInviteFindManyArgsSchema } from './ProgramInviteFindManyArgsSchema'
import { LinkFindManyArgsSchema } from './LinkFindManyArgsSchema'
import { ProgramCountOutputTypeArgsSchema } from './ProgramCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramSelectSchema: z.ZodType<Prisma.ProgramSelect> = z
    .object({
        id: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        name: z.boolean().optional(),
        slug: z.boolean().optional(),
        logo: z.boolean().optional(),
        wordmark: z.boolean().optional(),
        brandColor: z.boolean().optional(),
        domain: z.boolean().optional(),
        url: z.boolean().optional(),
        type: z.boolean().optional(),
        cookieLength: z.boolean().optional(),
        commissionAmount: z.boolean().optional(),
        commissionType: z.boolean().optional(),
        commissionDuration: z.boolean().optional(),
        commissionInterval: z.boolean().optional(),
        landerData: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        discounts: z.union([z.boolean(), z.lazy(() => DiscountFindManyArgsSchema)]).optional(),
        workspace: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        primaryDomain: z.union([z.boolean(), z.lazy(() => DomainArgsSchema)]).optional(),
        partners: z.union([z.boolean(), z.lazy(() => ProgramEnrollmentFindManyArgsSchema)]).optional(),
        payouts: z.union([z.boolean(), z.lazy(() => PayoutFindManyArgsSchema)]).optional(),
        sales: z.union([z.boolean(), z.lazy(() => SaleFindManyArgsSchema)]).optional(),
        invoices: z.union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
        resources: z.union([z.boolean(), z.lazy(() => ProgramResourceFindManyArgsSchema)]).optional(),
        applications: z.union([z.boolean(), z.lazy(() => ProgramApplicationFindManyArgsSchema)]).optional(),
        invites: z.union([z.boolean(), z.lazy(() => ProgramInviteFindManyArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ProgramCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const ProgramDeleteArgsSchema: z.ZodType<Prisma.ProgramDeleteArgs> = z
    .object({
        select: ProgramSelectSchema.optional(),
        include: ProgramIncludeSchema.optional(),
        where: ProgramWhereUniqueInputSchema
    })
    .strict()

export default ProgramDeleteArgsSchema
