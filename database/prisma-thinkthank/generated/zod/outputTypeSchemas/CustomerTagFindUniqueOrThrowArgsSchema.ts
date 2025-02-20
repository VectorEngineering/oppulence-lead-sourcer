import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagIncludeSchema } from '../inputTypeSchemas/CustomerTagIncludeSchema'
import { CustomerTagWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerTagWhereUniqueInputSchema'
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

export const CustomerTagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CustomerTagFindUniqueOrThrowArgs> = z
    .object({
        select: CustomerTagSelectSchema.optional(),
        include: CustomerTagIncludeSchema.optional(),
        where: CustomerTagWhereUniqueInputSchema
    })
    .strict()

export default CustomerTagFindUniqueOrThrowArgsSchema
