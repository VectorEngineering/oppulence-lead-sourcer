import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'

export const DefaultDomainsScalarWhereInputSchema: z.ZodType<Prisma.DefaultDomainsScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => DefaultDomainsScalarWhereInputSchema), z.lazy(() => DefaultDomainsScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => DefaultDomainsScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => DefaultDomainsScalarWhereInputSchema), z.lazy(() => DefaultDomainsScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
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
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict()

export default DefaultDomainsScalarWhereInputSchema
