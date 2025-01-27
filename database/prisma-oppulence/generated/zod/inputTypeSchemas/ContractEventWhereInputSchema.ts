import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { ContractRelationFilterSchema } from './ContractRelationFilterSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractEventWhereInputSchema: z.ZodType<Prisma.ContractEventWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ContractEventWhereInputSchema), z.lazy(() => ContractEventWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ContractEventWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ContractEventWhereInputSchema), z.lazy(() => ContractEventWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        contractId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        dueDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        completedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contract: z.union([z.lazy(() => ContractRelationFilterSchema), z.lazy(() => ContractWhereInputSchema)]).optional()
    })
    .strict()

export default ContractEventWhereInputSchema
