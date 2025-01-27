import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ContractRelationFilterSchema } from './ContractRelationFilterSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractApprovalWhereInputSchema: z.ZodType<Prisma.ContractApprovalWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ContractApprovalWhereInputSchema), z.lazy(() => ContractApprovalWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ContractApprovalWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ContractApprovalWhereInputSchema), z.lazy(() => ContractApprovalWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        contractId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        stage: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        approverRole: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        approverId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        comments: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        contract: z.union([z.lazy(() => ContractRelationFilterSchema), z.lazy(() => ContractWhereInputSchema)]).optional()
    })
    .strict()

export default ContractApprovalWhereInputSchema
