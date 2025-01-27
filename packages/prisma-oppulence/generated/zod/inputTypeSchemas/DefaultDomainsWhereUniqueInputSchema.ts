import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DefaultDomainsWhereInputSchema } from './DefaultDomainsWhereInputSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const DefaultDomainsWhereUniqueInputSchema: z.ZodType<Prisma.DefaultDomainsWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            projectId: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            projectId: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                projectId: z.string().optional(),
                AND: z
                    .union([z.lazy(() => DefaultDomainsWhereInputSchema), z.lazy(() => DefaultDomainsWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => DefaultDomainsWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => DefaultDomainsWhereInputSchema), z.lazy(() => DefaultDomainsWhereInputSchema).array()])
                    .optional(),
                oppulence: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                solomonai: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                thinkthank: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                dublink: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                dubsh: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                chatgpt: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                sptifi: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                gitnew: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                callink: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                amznid: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                ggllink: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                figpage: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                loooooooong: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional()
            })
            .strict()
    )

export default DefaultDomainsWhereUniqueInputSchema
