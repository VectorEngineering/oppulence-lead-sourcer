import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagNameProjectIdCompoundUniqueInputSchema } from './TagNameProjectIdCompoundUniqueInputSchema'
import { TagWhereInputSchema } from './TagWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { LinkTagListRelationFilterSchema } from './LinkTagListRelationFilterSchema'
import { CustomerTagListRelationFilterSchema } from './CustomerTagListRelationFilterSchema'
import { TransactionListRelationFilterSchema } from './TransactionListRelationFilterSchema'
import { BankAccountListRelationFilterSchema } from './BankAccountListRelationFilterSchema'

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            name_projectId: z.lazy(() => TagNameProjectIdCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            name_projectId: z.lazy(() => TagNameProjectIdCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                name_projectId: z.lazy(() => TagNameProjectIdCompoundUniqueInputSchema).optional(),
                AND: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => TagWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                color: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                context: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                confidence: z
                    .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
                    .optional()
                    .nullable(),
                metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
                project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional(),
                links: z.lazy(() => LinkTagListRelationFilterSchema).optional(),
                CustomerTag: z.lazy(() => CustomerTagListRelationFilterSchema).optional(),
                Transaction: z.lazy(() => TransactionListRelationFilterSchema).optional(),
                BankAccount: z.lazy(() => BankAccountListRelationFilterSchema).optional()
            })
            .strict()
    )

export default TagWhereUniqueInputSchema
