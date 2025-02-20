import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractDocumentIncludeSchema } from '../inputTypeSchemas/ContractDocumentIncludeSchema'
import { ContractDocumentCreateInputSchema } from '../inputTypeSchemas/ContractDocumentCreateInputSchema'
import { ContractDocumentUncheckedCreateInputSchema } from '../inputTypeSchemas/ContractDocumentUncheckedCreateInputSchema'
import { ContractArgsSchema } from '../outputTypeSchemas/ContractArgsSchema'
import { DocumentCommentFindManyArgsSchema } from '../outputTypeSchemas/DocumentCommentFindManyArgsSchema'
import { DocumentAnnotationFindManyArgsSchema } from '../outputTypeSchemas/DocumentAnnotationFindManyArgsSchema'
import { ContractDocumentCountOutputTypeArgsSchema } from '../outputTypeSchemas/ContractDocumentCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractDocumentSelectSchema: z.ZodType<Prisma.ContractDocumentSelect> = z
    .object({
        id: z.boolean().optional(),
        contractId: z.boolean().optional(),
        type: z.boolean().optional(),
        category: z.boolean().optional(),
        classification: z.boolean().optional(),
        importance: z.boolean().optional(),
        status: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        version: z.boolean().optional(),
        language: z.boolean().optional(),
        pageCount: z.boolean().optional(),
        wordCount: z.boolean().optional(),
        fileUrl: z.boolean().optional(),
        fileType: z.boolean().optional(),
        fileSize: z.boolean().optional(),
        fileHash: z.boolean().optional(),
        originalFilename: z.boolean().optional(),
        mimeType: z.boolean().optional(),
        encoding: z.boolean().optional(),
        compression: z.boolean().optional(),
        storageProvider: z.boolean().optional(),
        storagePath: z.boolean().optional(),
        backupUrl: z.boolean().optional(),
        cdnUrl: z.boolean().optional(),
        accessLevel: z.boolean().optional(),
        accessPermissions: z.boolean().optional(),
        encryptionStatus: z.boolean().optional(),
        encryptionType: z.boolean().optional(),
        password: z.boolean().optional(),
        tags: z.boolean().optional(),
        keywords: z.boolean().optional(),
        metadata: z.boolean().optional(),
        customFields: z.boolean().optional(),
        signatures: z.boolean().optional(),
        certificateInfo: z.boolean().optional(),
        signatureStatus: z.boolean().optional(),
        signedBy: z.boolean().optional(),
        signedAt: z.boolean().optional(),
        reviewStatus: z.boolean().optional(),
        reviewedBy: z.boolean().optional(),
        reviewedAt: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        approvedAt: z.boolean().optional(),
        rejectionReason: z.boolean().optional(),
        versionNotes: z.boolean().optional(),
        versionChanges: z.boolean().optional(),
        previousVersion: z.boolean().optional(),
        isLatestVersion: z.boolean().optional(),
        retentionPeriod: z.boolean().optional(),
        retentionExpiryDate: z.boolean().optional(),
        complianceStatus: z.boolean().optional(),
        complianceNotes: z.boolean().optional(),
        legalHold: z.boolean().optional(),
        processingStatus: z.boolean().optional(),
        processingErrors: z.boolean().optional(),
        textExtracted: z.boolean().optional(),
        extractedText: z.boolean().optional(),
        ocrStatus: z.boolean().optional(),
        externalId: z.boolean().optional(),
        externalSystem: z.boolean().optional(),
        externalUrl: z.boolean().optional(),
        synchronizationStatus: z.boolean().optional(),
        viewCount: z.boolean().optional(),
        downloadCount: z.boolean().optional(),
        lastViewedBy: z.boolean().optional(),
        lastViewedAt: z.boolean().optional(),
        lastDownloadedBy: z.boolean().optional(),
        lastDownloadedAt: z.boolean().optional(),
        validateStatus: z.boolean().optional(),
        validationErrors: z.boolean().optional(),
        validatedBy: z.boolean().optional(),
        validatedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        archivedAt: z.boolean().optional(),
        archivedBy: z.boolean().optional(),
        restoredAt: z.boolean().optional(),
        restoredBy: z.boolean().optional(),
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional(),
        documentComments: z.union([z.boolean(), z.lazy(() => DocumentCommentFindManyArgsSchema)]).optional(),
        documentAnnotations: z.union([z.boolean(), z.lazy(() => DocumentAnnotationFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ContractDocumentCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const ContractDocumentCreateArgsSchema: z.ZodType<Prisma.ContractDocumentCreateArgs> = z
    .object({
        select: ContractDocumentSelectSchema.optional(),
        include: ContractDocumentIncludeSchema.optional(),
        data: z.union([ContractDocumentCreateInputSchema, ContractDocumentUncheckedCreateInputSchema])
    })
    .strict()

export default ContractDocumentCreateArgsSchema
