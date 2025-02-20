import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LinkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LinkScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LinkScalarWhereWithAggregatesInputSchema), z.lazy(() => LinkScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LinkScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LinkScalarWhereWithAggregatesInputSchema), z.lazy(() => LinkScalarWhereWithAggregatesInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        domain: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        key: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        url: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        shortLink: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        archived: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        expiresAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        expiredUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        password: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        trackConversion: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        proxy: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        title: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        image: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        video: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_source: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_medium: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_campaign: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_term: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        utm_content: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        rewrite: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        doIndex: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        ios: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        android: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        geo: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        userId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        tenantId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        publicStats: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        clicks: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        lastClicked: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        leads: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        sales: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        saleAmount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        comments: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        programId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default LinkScalarWhereWithAggregatesInputSchema
