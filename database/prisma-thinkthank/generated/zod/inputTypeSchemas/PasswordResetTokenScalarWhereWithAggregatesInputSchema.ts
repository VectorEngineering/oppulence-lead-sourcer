import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const PasswordResetTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PasswordResetTokenScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        identifier: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        token: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default PasswordResetTokenScalarWhereWithAggregatesInputSchema
