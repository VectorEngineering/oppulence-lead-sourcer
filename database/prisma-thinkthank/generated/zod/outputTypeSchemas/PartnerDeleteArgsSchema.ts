import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerIncludeSchema } from '../inputTypeSchemas/PartnerIncludeSchema'
import { PartnerWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerWhereUniqueInputSchema'
import { ProgramEnrollmentFindManyArgsSchema } from '../outputTypeSchemas/ProgramEnrollmentFindManyArgsSchema'
import { ProgramApplicationFindManyArgsSchema } from '../outputTypeSchemas/ProgramApplicationFindManyArgsSchema'
import { PartnerUserFindManyArgsSchema } from '../outputTypeSchemas/PartnerUserFindManyArgsSchema'
import { PartnerInviteFindManyArgsSchema } from '../outputTypeSchemas/PartnerInviteFindManyArgsSchema'
import { PayoutFindManyArgsSchema } from '../outputTypeSchemas/PayoutFindManyArgsSchema'
import { SaleFindManyArgsSchema } from '../outputTypeSchemas/SaleFindManyArgsSchema'
import { PartnerCountOutputTypeArgsSchema } from '../outputTypeSchemas/PartnerCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PartnerSelectSchema: z.ZodType<Prisma.PartnerSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        email: z.boolean().optional(),
        image: z.boolean().optional(),
        bio: z.boolean().optional(),
        country: z.boolean().optional(),
        status: z.boolean().optional(),
        stripeConnectId: z.boolean().optional(),
        payoutsEnabled: z.boolean().optional(),
        showOnLeaderboard: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        programs: z.union([z.boolean(), z.lazy(() => ProgramEnrollmentFindManyArgsSchema)]).optional(),
        applications: z.union([z.boolean(), z.lazy(() => ProgramApplicationFindManyArgsSchema)]).optional(),
        users: z.union([z.boolean(), z.lazy(() => PartnerUserFindManyArgsSchema)]).optional(),
        invites: z.union([z.boolean(), z.lazy(() => PartnerInviteFindManyArgsSchema)]).optional(),
        payouts: z.union([z.boolean(), z.lazy(() => PayoutFindManyArgsSchema)]).optional(),
        sales: z.union([z.boolean(), z.lazy(() => SaleFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PartnerCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const PartnerDeleteArgsSchema: z.ZodType<Prisma.PartnerDeleteArgs> = z
    .object({
        select: PartnerSelectSchema.optional(),
        include: PartnerIncludeSchema.optional(),
        where: PartnerWhereUniqueInputSchema
    })
    .strict()

export default PartnerDeleteArgsSchema
