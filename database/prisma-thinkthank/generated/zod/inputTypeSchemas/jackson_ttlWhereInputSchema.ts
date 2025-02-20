import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { BigIntFilterSchema } from './BigIntFilterSchema'

export const jackson_ttlWhereInputSchema: z.ZodType<Prisma.jackson_ttlWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => jackson_ttlWhereInputSchema), z.lazy(() => jackson_ttlWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => jackson_ttlWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => jackson_ttlWhereInputSchema), z.lazy(() => jackson_ttlWhereInputSchema).array()]).optional(),
        key: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        expiresAt: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional()
    })
    .strict()

export default jackson_ttlWhereInputSchema
