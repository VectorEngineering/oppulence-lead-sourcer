import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerStatusSchema } from './PartnerStatusSchema'
import { ProgramEnrollmentUncheckedCreateNestedManyWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema } from './ProgramApplicationUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { PartnerUserUncheckedCreateNestedManyWithoutPartnerInputSchema } from './PartnerUserUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema } from './PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema'
import { PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema } from './PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema'

export const PartnerUncheckedCreateWithoutSalesInputSchema: z.ZodType<Prisma.PartnerUncheckedCreateWithoutSalesInput> = z
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
        users: z.lazy(() => PartnerUserUncheckedCreateNestedManyWithoutPartnerInputSchema).optional(),
        invites: z.lazy(() => PartnerInviteUncheckedCreateNestedManyWithoutPartnerInputSchema).optional(),
        payouts: z.lazy(() => PayoutUncheckedCreateNestedManyWithoutPartnerInputSchema).optional()
    })
    .strict()

export default PartnerUncheckedCreateWithoutSalesInputSchema
