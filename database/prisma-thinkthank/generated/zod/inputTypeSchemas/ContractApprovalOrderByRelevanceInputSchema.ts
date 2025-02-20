import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractApprovalOrderByRelevanceFieldEnumSchema } from './ContractApprovalOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractApprovalOrderByRelevanceInputSchema: z.ZodType<Prisma.ContractApprovalOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => ContractApprovalOrderByRelevanceFieldEnumSchema),
            z.lazy(() => ContractApprovalOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default ContractApprovalOrderByRelevanceInputSchema
