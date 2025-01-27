import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumInboxTypeNullableFilterSchema } from './EnumInboxTypeNullableFilterSchema'
import { InboxTypeSchema } from './InboxTypeSchema'
import { EnumInboxStatusNullableFilterSchema } from './EnumInboxStatusNullableFilterSchema'
import { InboxStatusSchema } from './InboxStatusSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { EnumStorageLocationFilterSchema } from './EnumStorageLocationFilterSchema'
import { StorageLocationSchema } from './StorageLocationSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { EnumInboxAccessLevelFilterSchema } from './EnumInboxAccessLevelFilterSchema'
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema'
import { EnumInboxClassificationFilterSchema } from './EnumInboxClassificationFilterSchema'
import { InboxClassificationSchema } from './InboxClassificationSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumRetentionPolicyFilterSchema } from './EnumRetentionPolicyFilterSchema'
import { RetentionPolicySchema } from './RetentionPolicySchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { InboxNullableRelationFilterSchema } from './InboxNullableRelationFilterSchema'
import { InboxListRelationFilterSchema } from './InboxListRelationFilterSchema'
import { InboxActivityListRelationFilterSchema } from './InboxActivityListRelationFilterSchema'
import { InboxShareListRelationFilterSchema } from './InboxShareListRelationFilterSchema'
import { InboxLabelListRelationFilterSchema } from './InboxLabelListRelationFilterSchema'

export const InboxWhereInputSchema: z.ZodType<Prisma.InboxWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => InboxWhereInputSchema), z.lazy(() => InboxWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => InboxWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => InboxWhereInputSchema), z.lazy(() => InboxWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        originalName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z
            .union([z.lazy(() => EnumInboxTypeNullableFilterSchema), z.lazy(() => InboxTypeSchema)])
            .optional()
            .nullable(),
        status: z
            .union([z.lazy(() => EnumInboxStatusNullableFilterSchema), z.lazy(() => InboxStatusSchema)])
            .optional()
            .nullable(),
        fileName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        filePath: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileHash: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileExtension: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        size: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        contentType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        checksum: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        compression: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        storageLocation: z.union([z.lazy(() => EnumStorageLocationFilterSchema), z.lazy(() => StorageLocationSchema)]).optional(),
        virusScanStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        virusScanDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        securityFlags: z.lazy(() => JsonNullableFilterSchema).optional(),
        accessAttempts: z.lazy(() => JsonNullableFilterSchema).optional(),
        lastSecurityAudit: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        encryptionMethod: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        encryptionKeyId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        digitalSignature: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        certificateId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        folderId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        path: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableFilterSchema).optional(),
        starred: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        pinned: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        sortOrder: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        displayOrder: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        accessLevel: z.union([z.lazy(() => EnumInboxAccessLevelFilterSchema), z.lazy(() => InboxAccessLevelSchema)]).optional(),
        classification: z.union([z.lazy(() => EnumInboxClassificationFilterSchema), z.lazy(() => InboxClassificationSchema)]).optional(),
        password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        encryptionKey: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        shareableLink: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        maxAccessCount: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        accessHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
        ipRestrictions: z.lazy(() => JsonNullableFilterSchema).optional(),
        allowedDomains: z.lazy(() => JsonNullableFilterSchema).optional(),
        geoRestrictions: z.lazy(() => JsonNullableFilterSchema).optional(),
        retentionPolicy: z.union([z.lazy(() => EnumRetentionPolicyFilterSchema), z.lazy(() => RetentionPolicySchema)]).optional(),
        retentionDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        legalHold: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        dispositionDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        archiveDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        purgeDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        amount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        baseAmount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        baseCurrency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        currency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        exchangeRate: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        taxAmount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        totalAmount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        date: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        lastAccessedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        expiresAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        effectiveDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastValidated: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastBackupDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        processingStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        processingErrors: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        retryCount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        maxRetries: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        workflow: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvalStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
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
        nextReviewDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        ocrText: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ocrLanguage: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ocrConfidence: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        ocrEngine: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        analysisResults: z.lazy(() => JsonNullableFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        contentHash: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contentAnalysis: z.lazy(() => JsonNullableFilterSchema).optional(),
        aiTags: z.lazy(() => JsonNullableFilterSchema).optional(),
        customMetadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        version: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        versionNotes: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        parentVersion: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isLatestVersion: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        versionHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
        changeLog: z.lazy(() => JsonNullableFilterSchema).optional(),
        branchName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        mergeHistory: z.lazy(() => JsonNullableFilterSchema).optional(),
        forwardedTo: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        forwardedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        forwardedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        sharedWith: z.lazy(() => JsonNullableFilterSchema).optional(),
        collaborators: z.lazy(() => JsonNullableFilterSchema).optional(),
        lockHolder: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lockExpiresAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastModifiedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        referenceId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        referenceType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        sourceSystem: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalLinks: z.lazy(() => JsonNullableFilterSchema).optional(),
        dependencies: z.lazy(() => JsonNullableFilterSchema).optional(),
        relatedFiles: z.lazy(() => JsonNullableFilterSchema).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdById: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        ownerId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastModifiedById: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        attachmentId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        transactionId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceTags: z.lazy(() => JsonNullableFilterSchema).optional(),
        dataPrivacyLevel: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        regulatoryFlags: z.lazy(() => JsonNullableFilterSchema).optional(),
        auditTrail: z.lazy(() => JsonNullableFilterSchema).optional(),
        backupStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastBackupId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        recoveryPoint: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        backupLocation: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        project: z
            .union([z.lazy(() => ProjectNullableRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)])
            .optional()
            .nullable(),
        parent: z
            .union([z.lazy(() => InboxNullableRelationFilterSchema), z.lazy(() => InboxWhereInputSchema)])
            .optional()
            .nullable(),
        children: z.lazy(() => InboxListRelationFilterSchema).optional(),
        activities: z.lazy(() => InboxActivityListRelationFilterSchema).optional(),
        shares: z.lazy(() => InboxShareListRelationFilterSchema).optional(),
        labels: z.lazy(() => InboxLabelListRelationFilterSchema).optional()
    })
    .strict()

export default InboxWhereInputSchema
