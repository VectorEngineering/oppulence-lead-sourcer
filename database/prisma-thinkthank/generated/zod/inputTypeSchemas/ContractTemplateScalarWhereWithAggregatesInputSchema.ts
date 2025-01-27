import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const ContractTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContractTemplateScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ContractTemplateScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ContractTemplateScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ContractTemplateScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ContractTemplateScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ContractTemplateScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        category: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        version: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        language: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        industry: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        content: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        variables: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        sections: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        defaultValues: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        styling: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        layout: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        pageSettings: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        useCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        lastUsedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        isPublic: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        reviewRequired: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        approvalRequired: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        fileUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        previewUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        thumbnailUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessLevel: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        permissions: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        validationRules: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        requiredFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        archivedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default ContractTemplateScalarWhereWithAggregatesInputSchema
