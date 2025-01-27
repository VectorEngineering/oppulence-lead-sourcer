import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DiscountOrderByRelationAggregateInputSchema } from './DiscountOrderByRelationAggregateInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { DomainOrderByWithRelationInputSchema } from './DomainOrderByWithRelationInputSchema'
import { ProgramEnrollmentOrderByRelationAggregateInputSchema } from './ProgramEnrollmentOrderByRelationAggregateInputSchema'
import { PayoutOrderByRelationAggregateInputSchema } from './PayoutOrderByRelationAggregateInputSchema'
import { SaleOrderByRelationAggregateInputSchema } from './SaleOrderByRelationAggregateInputSchema'
import { InvoiceOrderByRelationAggregateInputSchema } from './InvoiceOrderByRelationAggregateInputSchema'
import { ProgramResourceOrderByRelationAggregateInputSchema } from './ProgramResourceOrderByRelationAggregateInputSchema'
import { ProgramApplicationOrderByRelationAggregateInputSchema } from './ProgramApplicationOrderByRelationAggregateInputSchema'
import { ProgramInviteOrderByRelationAggregateInputSchema } from './ProgramInviteOrderByRelationAggregateInputSchema'
import { LinkOrderByRelationAggregateInputSchema } from './LinkOrderByRelationAggregateInputSchema'
import { ProgramOrderByRelevanceInputSchema } from './ProgramOrderByRelevanceInputSchema'

export const ProgramOrderByWithRelationInputSchema: z.ZodType<Prisma.ProgramOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        logo: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        wordmark: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        brandColor: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        domain: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        url: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        cookieLength: z.lazy(() => SortOrderSchema).optional(),
        commissionAmount: z.lazy(() => SortOrderSchema).optional(),
        commissionType: z.lazy(() => SortOrderSchema).optional(),
        commissionDuration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        commissionInterval: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        landerData: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        discounts: z.lazy(() => DiscountOrderByRelationAggregateInputSchema).optional(),
        workspace: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        primaryDomain: z.lazy(() => DomainOrderByWithRelationInputSchema).optional(),
        partners: z.lazy(() => ProgramEnrollmentOrderByRelationAggregateInputSchema).optional(),
        payouts: z.lazy(() => PayoutOrderByRelationAggregateInputSchema).optional(),
        sales: z.lazy(() => SaleOrderByRelationAggregateInputSchema).optional(),
        invoices: z.lazy(() => InvoiceOrderByRelationAggregateInputSchema).optional(),
        resources: z.lazy(() => ProgramResourceOrderByRelationAggregateInputSchema).optional(),
        applications: z.lazy(() => ProgramApplicationOrderByRelationAggregateInputSchema).optional(),
        invites: z.lazy(() => ProgramInviteOrderByRelationAggregateInputSchema).optional(),
        links: z.lazy(() => LinkOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => ProgramOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ProgramOrderByWithRelationInputSchema
