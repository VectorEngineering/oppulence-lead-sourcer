import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerArgsSchema } from '../outputTypeSchemas/CustomerArgsSchema'
import { TagArgsSchema } from '../outputTypeSchemas/TagArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'

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

export default CustomerTagSelectSchema
