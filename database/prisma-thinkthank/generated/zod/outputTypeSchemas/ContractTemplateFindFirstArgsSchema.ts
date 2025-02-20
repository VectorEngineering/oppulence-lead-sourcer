import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractTemplateIncludeSchema } from '../inputTypeSchemas/ContractTemplateIncludeSchema'
import { ContractTemplateWhereInputSchema } from '../inputTypeSchemas/ContractTemplateWhereInputSchema'
import { ContractTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractTemplateOrderByWithRelationInputSchema'
import { ContractTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ContractTemplateWhereUniqueInputSchema'
import { ContractTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/ContractTemplateScalarFieldEnumSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractTemplateSelectSchema: z.ZodType<Prisma.ContractTemplateSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        category: z.boolean().optional(),
        type: z.boolean().optional(),
        version: z.boolean().optional(),
        status: z.boolean().optional(),
        language: z.boolean().optional(),
        industry: z.boolean().optional(),
        content: z.boolean().optional(),
        variables: z.boolean().optional(),
        sections: z.boolean().optional(),
        defaultValues: z.boolean().optional(),
        styling: z.boolean().optional(),
        layout: z.boolean().optional(),
        pageSettings: z.boolean().optional(),
        useCount: z.boolean().optional(),
        lastUsedAt: z.boolean().optional(),
        isPublic: z.boolean().optional(),
        reviewRequired: z.boolean().optional(),
        approvalRequired: z.boolean().optional(),
        fileUrl: z.boolean().optional(),
        previewUrl: z.boolean().optional(),
        thumbnailUrl: z.boolean().optional(),
        accessLevel: z.boolean().optional(),
        permissions: z.boolean().optional(),
        validationRules: z.boolean().optional(),
        requiredFields: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        archivedAt: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const ContractTemplateFindFirstArgsSchema: z.ZodType<Prisma.ContractTemplateFindFirstArgs> = z
    .object({
        select: ContractTemplateSelectSchema.optional(),
        include: ContractTemplateIncludeSchema.optional(),
        where: ContractTemplateWhereInputSchema.optional(),
        orderBy: z
            .union([ContractTemplateOrderByWithRelationInputSchema.array(), ContractTemplateOrderByWithRelationInputSchema])
            .optional(),
        cursor: ContractTemplateWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ContractTemplateScalarFieldEnumSchema, ContractTemplateScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ContractTemplateFindFirstArgsSchema
