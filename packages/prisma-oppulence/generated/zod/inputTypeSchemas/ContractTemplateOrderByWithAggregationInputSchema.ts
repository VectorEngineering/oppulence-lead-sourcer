import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ContractTemplateCountOrderByAggregateInputSchema } from './ContractTemplateCountOrderByAggregateInputSchema'
import { ContractTemplateAvgOrderByAggregateInputSchema } from './ContractTemplateAvgOrderByAggregateInputSchema'
import { ContractTemplateMaxOrderByAggregateInputSchema } from './ContractTemplateMaxOrderByAggregateInputSchema'
import { ContractTemplateMinOrderByAggregateInputSchema } from './ContractTemplateMinOrderByAggregateInputSchema'
import { ContractTemplateSumOrderByAggregateInputSchema } from './ContractTemplateSumOrderByAggregateInputSchema'

export const ContractTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContractTemplateOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        category: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        version: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        language: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        industry: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        variables: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        sections: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        defaultValues: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        styling: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        layout: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        pageSettings: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        useCount: z.lazy(() => SortOrderSchema).optional(),
        lastUsedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        isPublic: z.lazy(() => SortOrderSchema).optional(),
        reviewRequired: z.lazy(() => SortOrderSchema).optional(),
        approvalRequired: z.lazy(() => SortOrderSchema).optional(),
        fileUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        previewUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        thumbnailUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        accessLevel: z.lazy(() => SortOrderSchema).optional(),
        permissions: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        validationRules: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        requiredFields: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        updatedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        archivedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => ContractTemplateCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => ContractTemplateAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ContractTemplateMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ContractTemplateMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => ContractTemplateSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ContractTemplateOrderByWithAggregationInputSchema
