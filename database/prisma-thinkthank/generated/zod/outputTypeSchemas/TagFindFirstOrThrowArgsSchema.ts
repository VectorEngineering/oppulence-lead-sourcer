import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'
import { TagOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagOrderByWithRelationInputSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'
import { TagScalarFieldEnumSchema } from '../inputTypeSchemas/TagScalarFieldEnumSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { LinkTagFindManyArgsSchema } from '../outputTypeSchemas/LinkTagFindManyArgsSchema'
import { CustomerTagFindManyArgsSchema } from '../outputTypeSchemas/CustomerTagFindManyArgsSchema'
import { TransactionFindManyArgsSchema } from '../outputTypeSchemas/TransactionFindManyArgsSchema'
import { BankAccountFindManyArgsSchema } from '../outputTypeSchemas/BankAccountFindManyArgsSchema'
import { TagCountOutputTypeArgsSchema } from '../outputTypeSchemas/TagCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        color: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        context: z.boolean().optional(),
        confidence: z.boolean().optional(),
        metadata: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkTagFindManyArgsSchema)]).optional(),
        CustomerTag: z.union([z.boolean(), z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
        Transaction: z.union([z.boolean(), z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
        BankAccount: z.union([z.boolean(), z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const TagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z
    .object({
        select: TagSelectSchema.optional(),
        include: TagIncludeSchema.optional(),
        where: TagWhereInputSchema.optional(),
        orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
        cursor: TagWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([TagScalarFieldEnumSchema, TagScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default TagFindFirstOrThrowArgsSchema
