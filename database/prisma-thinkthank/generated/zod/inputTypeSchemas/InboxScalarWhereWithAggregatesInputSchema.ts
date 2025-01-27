import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumInboxTypeNullableWithAggregatesFilterSchema } from './EnumInboxTypeNullableWithAggregatesFilterSchema'
import { InboxTypeSchema } from './InboxTypeSchema'
import { EnumInboxStatusNullableWithAggregatesFilterSchema } from './EnumInboxStatusNullableWithAggregatesFilterSchema'
import { InboxStatusSchema } from './InboxStatusSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { EnumStorageLocationWithAggregatesFilterSchema } from './EnumStorageLocationWithAggregatesFilterSchema'
import { StorageLocationSchema } from './StorageLocationSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { EnumInboxAccessLevelWithAggregatesFilterSchema } from './EnumInboxAccessLevelWithAggregatesFilterSchema'
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema'
import { EnumInboxClassificationWithAggregatesFilterSchema } from './EnumInboxClassificationWithAggregatesFilterSchema'
import { InboxClassificationSchema } from './InboxClassificationSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { EnumRetentionPolicyWithAggregatesFilterSchema } from './EnumRetentionPolicyWithAggregatesFilterSchema'
import { RetentionPolicySchema } from './RetentionPolicySchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const InboxScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InboxScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InboxScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InboxScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InboxScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InboxScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InboxScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        originalName: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z
            .union([z.lazy(() => EnumInboxTypeNullableWithAggregatesFilterSchema), z.lazy(() => InboxTypeSchema)])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => EnumInboxStatusNullableWithAggregatesFilterSchema), z.lazy(() => InboxStatusSchema)])
            .optional()
            .nullable(),
        fileName: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        filePath: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileHash: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileType: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileExtension: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        size: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        contentType: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        checksum: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        compression: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        storageLocation: z
            .union([z.lazy(() => EnumStorageLocationWithAggregatesFilterSchema), z.lazy(() => StorageLocationSchema)])
            .optional(),
        virusScanStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        virusScanDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        securityFlags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        accessAttempts: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        lastSecurityAudit: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        encryptionMethod: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        encryptionKeyId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        digitalSignature: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        certificateId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        folderId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        path: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        starred: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        pinned: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        sortOrder: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        displayOrder: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        accessLevel: z
            .union([z.lazy(() => EnumInboxAccessLevelWithAggregatesFilterSchema), z.lazy(() => InboxAccessLevelSchema)])
            .optional(),
        classification: z
            .union([z.lazy(() => EnumInboxClassificationWithAggregatesFilterSchema), z.lazy(() => InboxClassificationSchema)])
            .optional(),
        password: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        encryptionKey: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        shareableLink: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        maxAccessCount: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        accessHistory: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        ipRestrictions: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        allowedDomains: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        geoRestrictions: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        retentionPolicy: z
            .union([z.lazy(() => EnumRetentionPolicyWithAggregatesFilterSchema), z.lazy(() => RetentionPolicySchema)])
            .optional(),
        retentionDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        legalHold: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        dispositionDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        archiveDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        purgeDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        amount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        baseAmount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        baseCurrency: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        currency: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        exchangeRate: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        taxAmount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        totalAmount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        date: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        lastAccessedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        expiresAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        effectiveDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastValidated: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastBackupDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        processingStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        processingErrors: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        retryCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        maxRetries: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        workflow: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvalStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        rejectionReason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        nextReviewDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        ocrText: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        ocrLanguage: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        ocrConfidence: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        ocrEngine: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        analysisResults: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        contentHash: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        contentAnalysis: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        aiTags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        customMetadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        version: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        versionNotes: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        parentVersion: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        isLatestVersion: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        versionHistory: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        changeLog: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        branchName: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        mergeHistory: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        forwardedTo: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        forwardedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        forwardedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        sharedWith: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        collaborators: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        lockHolder: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        lockExpiresAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastModifiedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        referenceId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        referenceType: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        sourceSystem: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalLinks: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        dependencies: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        relatedFiles: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdById: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        ownerId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastModifiedById: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        attachmentId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        transactionId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceTags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        dataPrivacyLevel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        regulatoryFlags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        auditTrail: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        backupStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastBackupId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        recoveryPoint: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        backupLocation: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default InboxScalarWhereWithAggregatesInputSchema
