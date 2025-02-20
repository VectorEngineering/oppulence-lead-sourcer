import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { PartnerOrderByWithRelationInputSchema } from './PartnerOrderByWithRelationInputSchema'
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema'
import { LinkOrderByWithRelationInputSchema } from './LinkOrderByWithRelationInputSchema'
import { DiscountOrderByWithRelationInputSchema } from './DiscountOrderByWithRelationInputSchema'
import { ProgramApplicationOrderByWithRelationInputSchema } from './ProgramApplicationOrderByWithRelationInputSchema'
import { ProgramEnrollmentOrderByRelevanceInputSchema } from './ProgramEnrollmentOrderByRelevanceInputSchema'

export const ProgramEnrollmentOrderByWithRelationInputSchema: z.ZodType<Prisma.ProgramEnrollmentOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        partnerId: z.lazy(() => SortOrderSchema).optional(),
        programId: z.lazy(() => SortOrderSchema).optional(),
        linkId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        commissionAmount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        discountId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        applicationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        partner: z.lazy(() => PartnerOrderByWithRelationInputSchema).optional(),
        program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
        link: z.lazy(() => LinkOrderByWithRelationInputSchema).optional(),
        discount: z.lazy(() => DiscountOrderByWithRelationInputSchema).optional(),
        application: z.lazy(() => ProgramApplicationOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => ProgramEnrollmentOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ProgramEnrollmentOrderByWithRelationInputSchema
