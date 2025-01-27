import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// CONTRACT TEMPLATE SCHEMA
/////////////////////////////////////////

export const ContractTemplateSchema = z.object({
    id: z.string().cuid(),
    name: z.string(),
    description: z.string().nullish(),
    category: z.string().nullish(),
    type: z.string(),
    version: z.number().int(),
    status: z.string(),
    language: z.string().nullish(),
    industry: z.string().nullish(),
    content: z.string(),
    variables: JsonValueSchema.nullable(),
    sections: JsonValueSchema.nullable(),
    defaultValues: JsonValueSchema.nullable(),
    styling: JsonValueSchema.nullable(),
    layout: JsonValueSchema.nullable(),
    pageSettings: JsonValueSchema.nullable(),
    useCount: z.number().int(),
    lastUsedAt: z.coerce.date().nullish(),
    isPublic: z.boolean(),
    reviewRequired: z.boolean(),
    approvalRequired: z.boolean(),
    fileUrl: z.string().nullish(),
    previewUrl: z.string().nullish(),
    thumbnailUrl: z.string().nullish(),
    accessLevel: z.string(),
    permissions: JsonValueSchema.nullable(),
    validationRules: JsonValueSchema.nullable(),
    requiredFields: JsonValueSchema.nullable(),
    projectId: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdBy: z.string().nullish(),
    updatedBy: z.string().nullish(),
    archivedAt: z.coerce.date().nullish()
})

export type ContractTemplate = z.infer<typeof ContractTemplateSchema>

/////////////////////////////////////////
// CONTRACT TEMPLATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ContractTemplateOptionalDefaultsSchema = ContractTemplateSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        version: z.number().int().optional(),
        status: z.string().optional(),
        useCount: z.number().int().optional(),
        isPublic: z.boolean().optional(),
        reviewRequired: z.boolean().optional(),
        approvalRequired: z.boolean().optional(),
        accessLevel: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ContractTemplateOptionalDefaults = z.infer<typeof ContractTemplateOptionalDefaultsSchema>

export default ContractTemplateSchema
