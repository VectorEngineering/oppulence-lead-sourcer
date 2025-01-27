import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ContractRelationFilterSchema } from './ContractRelationFilterSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractVersionWhereInputSchema: z.ZodType<Prisma.ContractVersionWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ContractVersionWhereInputSchema), z.lazy(() => ContractVersionWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ContractVersionWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ContractVersionWhereInputSchema), z.lazy(() => ContractVersionWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        contractId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        versionNumber: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        changeType: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        contentDiff: z.lazy(() => JsonNullableFilterSchema).optional(),
        title: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        changelog: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableFilterSchema).optional(),
        fileUrl: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        fileType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileSize: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        fileHash: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        isLatestVersion: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        isMajorVersion: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        reviewStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        reviewedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        reviewedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        approvedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        rejectionReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        signatures: z.lazy(() => JsonNullableFilterSchema).optional(),
        signatureStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        signedBy: z.lazy(() => JsonNullableFilterSchema).optional(),
        signedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        complianceStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceNotes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        viewCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        downloadCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        lastViewedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastViewedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        archivedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        archivedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contract: z.union([z.lazy(() => ContractRelationFilterSchema), z.lazy(() => ContractWhereInputSchema)]).optional()
    })
    .strict()

export default ContractVersionWhereInputSchema
