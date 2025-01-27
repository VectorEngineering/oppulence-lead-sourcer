import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ProgramEnrollmentOrderByRelationAggregateInputSchema } from './ProgramEnrollmentOrderByRelationAggregateInputSchema'
import { ProgramApplicationOrderByRelationAggregateInputSchema } from './ProgramApplicationOrderByRelationAggregateInputSchema'
import { PartnerUserOrderByRelationAggregateInputSchema } from './PartnerUserOrderByRelationAggregateInputSchema'
import { PartnerInviteOrderByRelationAggregateInputSchema } from './PartnerInviteOrderByRelationAggregateInputSchema'
import { PayoutOrderByRelationAggregateInputSchema } from './PayoutOrderByRelationAggregateInputSchema'
import { SaleOrderByRelationAggregateInputSchema } from './SaleOrderByRelationAggregateInputSchema'
import { PartnerOrderByRelevanceInputSchema } from './PartnerOrderByRelevanceInputSchema'

export const PartnerOrderByWithRelationInputSchema: z.ZodType<Prisma.PartnerOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        bio: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        country: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        stripeConnectId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        payoutsEnabled: z.lazy(() => SortOrderSchema).optional(),
        showOnLeaderboard: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        programs: z.lazy(() => ProgramEnrollmentOrderByRelationAggregateInputSchema).optional(),
        applications: z.lazy(() => ProgramApplicationOrderByRelationAggregateInputSchema).optional(),
        users: z.lazy(() => PartnerUserOrderByRelationAggregateInputSchema).optional(),
        invites: z.lazy(() => PartnerInviteOrderByRelationAggregateInputSchema).optional(),
        payouts: z.lazy(() => PayoutOrderByRelationAggregateInputSchema).optional(),
        sales: z.lazy(() => SaleOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => PartnerOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default PartnerOrderByWithRelationInputSchema
