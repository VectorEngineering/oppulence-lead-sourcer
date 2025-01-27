import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerStatusSchema } from './PartnerStatusSchema'
import { ProgramEnrollmentUncheckedCreateNestedManyWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema } from './ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema } from './PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema } from './PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { SaleUncheckedCreateNestedManyWithoutPartnerInputSchema } from './SaleUncheckedCreateNestedManyWithoutPartnerInputSchema'

export const PartnerUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.PartnerUncheckedCreateWithoutUsersInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        email: z.string(),
        image: z.string().optional().nullable(),
        bio: z.string().optional().nullable(),
        country: z.string(),
        status: z.lazy(() => PartnerStatusSchema).optional(),
        stripeConnectId: z.string().optional().nullable(),
        payoutsEnabled: z.boolean().optional(),
        showOnLeaderboard: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        programs: z.lazy(() => ProgramEnrollmentUncheckedCreateNestedManyWithoutPartnerInputSchema).optional(),
        applications: z.lazy(() => ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema).optional(),
        invites: z.lazy(() => PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema).optional(),
        payouts: z.lazy(() => PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema).optional(),
        sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutPartnerInputSchema).optional()
    })
    .strict()

export default PartnerUncheckedCreateWithoutUsersInputSchema
