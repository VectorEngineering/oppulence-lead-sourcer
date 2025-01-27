import { z } from 'zod';

export const InboxOrderByRelevanceFieldEnumSchema = z.enum(['id','name','originalName','description','fileName','filePath','fileUrl','fileHash','fileType','fileExtension','contentType','checksum','compression','virusScanStatus','encryptionMethod','encryptionKeyId','digitalSignature','certificateId','folderId','path','password','encryptionKey','shareableLink','baseCurrency','currency','processingStatus','processingErrors','workflow','approvalStatus','approvedBy','rejectionReason','ocrText','ocrLanguage','ocrEngine','contentHash','versionNotes','parentVersion','branchName','forwardedTo','forwardedBy','lockHolder','lastModifiedBy','referenceId','referenceType','sourceSystem','projectId','createdById','ownerId','lastModifiedById','attachmentId','transactionId','complianceStatus','dataPrivacyLevel','backupStatus','lastBackupId','recoveryPoint','backupLocation']);

export default InboxOrderByRelevanceFieldEnumSchema;
