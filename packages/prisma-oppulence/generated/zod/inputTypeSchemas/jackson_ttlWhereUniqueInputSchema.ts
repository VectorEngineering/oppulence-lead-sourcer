import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { jackson_ttlWhereInputSchema } from './jackson_ttlWhereInputSchema'
import { BigIntFilterSchema } from './BigIntFilterSchema'

export const jackson_ttlWhereUniqueInputSchema: z.ZodType<Prisma.jackson_ttlWhereUniqueInput> = z
    .object({
        key: z.string()
    })
    .and(
        z
            .object({
                key: z.string().optional(),
                AND: z.union([z.lazy(() => jackson_ttlWhereInputSchema), z.lazy(() => jackson_ttlWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => jackson_ttlWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => jackson_ttlWhereInputSchema), z.lazy(() => jackson_ttlWhereInputSchema).array()]).optional(),
                expiresAt: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional()
            })
            .strict()
    )

export default jackson_ttlWhereUniqueInputSchema
