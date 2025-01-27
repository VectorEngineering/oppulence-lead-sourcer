import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// CONTRACT DOCUMENT SCHEMA
/////////////////////////////////////////

export const ContractDocumentSchema = z.object({
  id: z.string().cuid(),
  contractId: z.string(),
  type: z.string(),
  category: z.string().nullish(),
  classification: z.string().nullish(),
  importance: z.string().nullish(),
  status: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  version: z.number().int(),
  language: z.string().nullish(),
  pageCount: z.number().int().nullish(),
  wordCount: z.number().int().nullish(),
  fileUrl: z.string(),
  fileType: z.string().nullish(),
  fileSize: z.number().int().nullish(),
  fileHash: z.string().nullish(),
  originalFilename: z.string().nullish(),
  mimeType: z.string().nullish(),
  encoding: z.string().nullish(),
  compression: z.string().nullish(),
  storageProvider: z.string().nullish(),
  storagePath: z.string().nullish(),
  backupUrl: z.string().nullish(),
  cdnUrl: z.string().nullish(),
  accessLevel: z.string().nullish(),
  accessPermissions: JsonValueSchema.nullable(),
  encryptionStatus: z.boolean(),
  encryptionType: z.string().nullish(),
  password: z.string().nullish(),
  tags: JsonValueSchema.nullable(),
  keywords: JsonValueSchema.nullable(),
  metadata: JsonValueSchema.nullable(),
  customFields: JsonValueSchema.nullable(),
  signatures: JsonValueSchema.nullable(),
  certificateInfo: JsonValueSchema.nullable(),
  signatureStatus: z.string().nullish(),
  signedBy: JsonValueSchema.nullable(),
  signedAt: z.coerce.date().nullish(),
  reviewStatus: z.string().nullish(),
  reviewedBy: z.string().nullish(),
  reviewedAt: z.coerce.date().nullish(),
  approvedBy: z.string().nullish(),
  approvedAt: z.coerce.date().nullish(),
  rejectionReason: z.string().nullish(),
  versionNotes: z.string().nullish(),
  versionChanges: JsonValueSchema.nullable(),
  previousVersion: z.string().nullish(),
  isLatestVersion: z.boolean(),
  retentionPeriod: z.number().int().nullish(),
  retentionExpiryDate: z.coerce.date().nullish(),
  complianceStatus: z.string().nullish(),
  complianceNotes: z.string().nullish(),
  legalHold: z.boolean(),
  processingStatus: z.string().nullish(),
  processingErrors: JsonValueSchema.nullable(),
  textExtracted: z.boolean(),
  extractedText: z.string().nullish(),
  ocrStatus: z.string().nullish(),
  externalId: z.string().nullish(),
  externalSystem: z.string().nullish(),
  externalUrl: z.string().nullish(),
  synchronizationStatus: z.string().nullish(),
  viewCount: z.number().int(),
  downloadCount: z.number().int(),
  lastViewedBy: z.string().nullish(),
  lastViewedAt: z.coerce.date().nullish(),
  lastDownloadedBy: z.string().nullish(),
  lastDownloadedAt: z.coerce.date().nullish(),
  validateStatus: z.string().nullish(),
  validationErrors: JsonValueSchema.nullable(),
  validatedBy: z.string().nullish(),
  validatedAt: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
  archivedAt: z.coerce.date().nullish(),
  archivedBy: z.string().nullish(),
  restoredAt: z.coerce.date().nullish(),
  restoredBy: z.string().nullish(),
})

export type ContractDocument = z.infer<typeof ContractDocumentSchema>

/////////////////////////////////////////
// CONTRACT DOCUMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ContractDocumentOptionalDefaultsSchema = ContractDocumentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  version: z.number().int().optional(),
  encryptionStatus: z.boolean().optional(),
  isLatestVersion: z.boolean().optional(),
  legalHold: z.boolean().optional(),
  textExtracted: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  downloadCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ContractDocumentOptionalDefaults = z.infer<typeof ContractDocumentOptionalDefaultsSchema>

export default ContractDocumentSchema;
