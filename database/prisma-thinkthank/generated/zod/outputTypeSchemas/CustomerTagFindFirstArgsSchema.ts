import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagIncludeSchema } from '../inputTypeSchemas/CustomerTagIncludeSchema'
import { CustomerTagWhereInputSchema } from '../inputTypeSchemas/CustomerTagWhereInputSchema'
import { CustomerTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerTagOrderByWithRelationInputSchema'
import { CustomerTagWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerTagWhereUniqueInputSchema'
import { CustomerTagScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerTagScalarFieldEnumSchema'
import { CustomerArgsSchema } from '../outputTypeSchemas/CustomerArgsSchema'
import { TagArgsSchema } from '../outputTypeSchemas/TagArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerTagSelectSchema: z.ZodType<Prisma.CustomerTagSelect> = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        customerId: z.boolean().optional(),
        tagId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        customer: z.union([z.boolean(), z.lazy(() => CustomerArgsSchema)]).optional(),
        tag: z.union([z.boolean(), z.lazy(() => TagArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const CustomerTagFindFirstArgsSchema: z.ZodType<Prisma.CustomerTagFindFirstArgs> = z
    .object({
        select: CustomerTagSelectSchema.optional(),
        include: CustomerTagIncludeSchema.optional(),
        where: CustomerTagWhereInputSchema.optional(),
        orderBy: z.union([CustomerTagOrderByWithRelationInputSchema.array(), CustomerTagOrderByWithRelationInputSchema]).optional(),
        cursor: CustomerTagWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([CustomerTagScalarFieldEnumSchema, CustomerTagScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default CustomerTagFindFirstArgsSchema
