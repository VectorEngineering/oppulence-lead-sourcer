import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractTemplateIncludeSchema } from '../inputTypeSchemas/ContractTemplateIncludeSchema'
import { ContractTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ContractTemplateWhereUniqueInputSchema'
import { ContractTemplateCreateInputSchema } from '../inputTypeSchemas/ContractTemplateCreateInputSchema'
import { ContractTemplateUncheckedCreateInputSchema } from '../inputTypeSchemas/ContractTemplateUncheckedCreateInputSchema'
import { ContractTemplateUpdateInputSchema } from '../inputTypeSchemas/ContractTemplateUpdateInputSchema'
import { ContractTemplateUncheckedUpdateInputSchema } from '../inputTypeSchemas/ContractTemplateUncheckedUpdateInputSchema'
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

export const ContractTemplateUpsertArgsSchema: z.ZodType<Prisma.ContractTemplateUpsertArgs> = z
    .object({
        select: ContractTemplateSelectSchema.optional(),
        include: ContractTemplateIncludeSchema.optional(),
        where: ContractTemplateWhereUniqueInputSchema,
        create: z.union([ContractTemplateCreateInputSchema, ContractTemplateUncheckedCreateInputSchema]),
        update: z.union([ContractTemplateUpdateInputSchema, ContractTemplateUncheckedUpdateInputSchema])
    })
    .strict()

export default ContractTemplateUpsertArgsSchema
