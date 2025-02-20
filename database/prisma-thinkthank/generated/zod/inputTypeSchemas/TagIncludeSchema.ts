import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { LinkTagFindManyArgsSchema } from '../outputTypeSchemas/LinkTagFindManyArgsSchema'
import { CustomerTagFindManyArgsSchema } from '../outputTypeSchemas/CustomerTagFindManyArgsSchema'
import { TransactionFindManyArgsSchema } from '../outputTypeSchemas/TransactionFindManyArgsSchema'
import { BankAccountFindManyArgsSchema } from '../outputTypeSchemas/BankAccountFindManyArgsSchema'
import { TagCountOutputTypeArgsSchema } from '../outputTypeSchemas/TagCountOutputTypeArgsSchema'

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkTagFindManyArgsSchema)]).optional(),
        CustomerTag: z.union([z.boolean(), z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
        Transaction: z.union([z.boolean(), z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
        BankAccount: z.union([z.boolean(), z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default TagIncludeSchema
