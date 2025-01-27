import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceAuditOrderByRelevanceFieldEnumSchema } from './LeadComplianceAuditOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadComplianceAuditOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadComplianceAuditOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadComplianceAuditOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadComplianceAuditOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadComplianceAuditOrderByRelevanceInputSchema
