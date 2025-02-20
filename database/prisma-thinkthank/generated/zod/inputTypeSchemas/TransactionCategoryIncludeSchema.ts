import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { TransactionFindManyArgsSchema } from '../outputTypeSchemas/TransactionFindManyArgsSchema'
import { TransactionCategoryArgsSchema } from '../outputTypeSchemas/TransactionCategoryArgsSchema'
import { TransactionCategoryFindManyArgsSchema } from '../outputTypeSchemas/TransactionCategoryFindManyArgsSchema'
import { TransactionCategoryCountOutputTypeArgsSchema } from '../outputTypeSchemas/TransactionCategoryCountOutputTypeArgsSchema'

export const TransactionCategoryIncludeSchema: z.ZodType<Prisma.TransactionCategoryInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        transactions: z.union([z.boolean(), z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
        parent: z.union([z.boolean(), z.lazy(() => TransactionCategoryArgsSchema)]).optional(),
        children: z.union([z.boolean(), z.lazy(() => TransactionCategoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TransactionCategoryCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default TransactionCategoryIncludeSchema
