import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { jackson_indexWhereInputSchema } from './jackson_indexWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'

export const jackson_indexWhereUniqueInputSchema: z.ZodType<Prisma.jackson_indexWhereUniqueInput> = z
    .object({
        id: z.number().int()
    })
    .and(
        z
            .object({
                id: z.number().int().optional(),
                AND: z.union([z.lazy(() => jackson_indexWhereInputSchema), z.lazy(() => jackson_indexWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => jackson_indexWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => jackson_indexWhereInputSchema), z.lazy(() => jackson_indexWhereInputSchema).array()]).optional(),
                key: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                storeKey: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
            })
            .strict()
    )

export default jackson_indexWhereUniqueInputSchema
