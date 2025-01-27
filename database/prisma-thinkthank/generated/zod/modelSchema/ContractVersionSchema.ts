import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// CONTRACT VERSION SCHEMA
/////////////////////////////////////////

export const ContractVersionSchema = z.object({
    id: z.string().cuid(),
    contractId: z.string(),
    versionNumber: z.number().int(),
    changeType: z.string(),
    content: z.string(),
    contentDiff: JsonValueSchema.nullable(),
    title: z.string().nullish(),
    description: z.string().nullish(),
    changelog: z.string().nullish(),
    tags: JsonValueSchema.nullable(),
    fileUrl: z.string(),
    fileType: z.string().nullish(),
    fileSize: z.number().int().nullish(),
    fileHash: z.string().nullish(),
    status: z.string(),
    isLatestVersion: z.boolean(),
    isMajorVersion: z.boolean(),
    reviewStatus: z.string().nullish(),
    reviewedBy: z.string().nullish(),
    reviewedAt: z.coerce.date().nullish(),
    approvedBy: z.string().nullish(),
    approvedAt: z.coerce.date().nullish(),
    rejectionReason: z.string().nullish(),
    signatures: JsonValueSchema.nullable(),
    signatureStatus: z.string().nullish(),
    signedBy: JsonValueSchema.nullable(),
    signedAt: z.coerce.date().nullish(),
    complianceStatus: z.string().nullish(),
    complianceNotes: z.string().nullish(),
    viewCount: z.number().int(),
    downloadCount: z.number().int(),
    lastViewedBy: z.string().nullish(),
    lastViewedAt: z.coerce.date().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdBy: z.string().nullish(),
    updatedBy: z.string().nullish(),
    archivedAt: z.coerce.date().nullish(),
    archivedBy: z.string().nullish()
})

export type ContractVersion = z.infer<typeof ContractVersionSchema>

/////////////////////////////////////////
// CONTRACT VERSION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ContractVersionOptionalDefaultsSchema = ContractVersionSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        isLatestVersion: z.boolean().optional(),
        isMajorVersion: z.boolean().optional(),
        viewCount: z.number().int().optional(),
        downloadCount: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ContractVersionOptionalDefaults = z.infer<typeof ContractVersionOptionalDefaultsSchema>

export default ContractVersionSchema
