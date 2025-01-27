import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagIncludeSchema } from '../inputTypeSchemas/CustomerTagIncludeSchema'
import { CustomerTagWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerTagWhereUniqueInputSchema'
import { CustomerTagCreateInputSchema } from '../inputTypeSchemas/CustomerTagCreateInputSchema'
import { CustomerTagUncheckedCreateInputSchema } from '../inputTypeSchemas/CustomerTagUncheckedCreateInputSchema'
import { CustomerTagUpdateInputSchema } from '../inputTypeSchemas/CustomerTagUpdateInputSchema'
import { CustomerTagUncheckedUpdateInputSchema } from '../inputTypeSchemas/CustomerTagUncheckedUpdateInputSchema'
import { CustomerArgsSchema } from './CustomerArgsSchema'
import { TagArgsSchema } from './TagArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
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

export const CustomerTagUpsertArgsSchema: z.ZodType<Prisma.CustomerTagUpsertArgs> = z
    .object({
        select: CustomerTagSelectSchema.optional(),
        include: CustomerTagIncludeSchema.optional(),
        where: CustomerTagWhereUniqueInputSchema,
        create: z.union([CustomerTagCreateInputSchema, CustomerTagUncheckedCreateInputSchema]),
        update: z.union([CustomerTagUpdateInputSchema, CustomerTagUncheckedUpdateInputSchema])
    })
    .strict()

export default CustomerTagUpsertArgsSchema
