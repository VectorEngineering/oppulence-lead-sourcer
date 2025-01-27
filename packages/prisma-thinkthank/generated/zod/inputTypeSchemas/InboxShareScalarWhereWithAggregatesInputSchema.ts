import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'

export const InboxShareScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InboxShareScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InboxShareScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InboxShareScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InboxShareScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InboxShareScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InboxShareScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        inboxId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        userId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        email: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessLevel: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        password: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        lastAccessed: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        accessCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        maxAccesses: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        ipRestriction: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        domainRestriction: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        deviceLimit: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        requireMFA: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        notifyOnAccess: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        accessSchedule: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        revokedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        revokedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        revokeReason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default InboxShareScalarWhereWithAggregatesInputSchema
