import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ContractRelationFilterSchema } from './ContractRelationFilterSchema'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'
import { DocumentCommentListRelationFilterSchema } from './DocumentCommentListRelationFilterSchema'
import { DocumentAnnotationListRelationFilterSchema } from './DocumentAnnotationListRelationFilterSchema'

export const ContractDocumentWhereInputSchema: z.ZodType<Prisma.ContractDocumentWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => ContractDocumentWhereInputSchema), z.lazy(() => ContractDocumentWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => ContractDocumentWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => ContractDocumentWhereInputSchema), z.lazy(() => ContractDocumentWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        contractId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        category: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        classification: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        importance: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        version: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        language: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        pageCount: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        wordCount: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
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
        originalFilename: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        mimeType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        encoding: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        compression: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        storageProvider: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        storagePath: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        backupUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        cdnUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessLevel: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessPermissions: z.lazy(() => JsonNullableFilterSchema).optional(),
        encryptionStatus: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        encryptionType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableFilterSchema).optional(),
        keywords: z.lazy(() => JsonNullableFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
        signatures: z.lazy(() => JsonNullableFilterSchema).optional(),
        certificateInfo: z.lazy(() => JsonNullableFilterSchema).optional(),
        signatureStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        signedBy: z.lazy(() => JsonNullableFilterSchema).optional(),
        signedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
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
        versionNotes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        versionChanges: z.lazy(() => JsonNullableFilterSchema).optional(),
        previousVersion: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isLatestVersion: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        retentionPeriod: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        retentionExpiryDate: z
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
        legalHold: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        processingStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        processingErrors: z.lazy(() => JsonNullableFilterSchema).optional(),
        textExtracted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        extractedText: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ocrStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalSystem: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        synchronizationStatus: z
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
        lastDownloadedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastDownloadedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        validateStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        validationErrors: z.lazy(() => JsonNullableFilterSchema).optional(),
        validatedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        validatedAt: z
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
        restoredAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        restoredBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contract: z.union([z.lazy(() => ContractRelationFilterSchema), z.lazy(() => ContractWhereInputSchema)]).optional(),
        documentComments: z.lazy(() => DocumentCommentListRelationFilterSchema).optional(),
        documentAnnotations: z.lazy(() => DocumentAnnotationListRelationFilterSchema).optional()
    })
    .strict()

export default ContractDocumentWhereInputSchema
