import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const EmailVerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => EmailVerificationTokenScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => EmailVerificationTokenScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => EmailVerificationTokenScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => EmailVerificationTokenScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => EmailVerificationTokenScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            identifier: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            token: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
        })
        .strict()

export default EmailVerificationTokenScalarWhereWithAggregatesInputSchema
