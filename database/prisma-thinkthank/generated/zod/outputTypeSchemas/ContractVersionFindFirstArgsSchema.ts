import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractVersionIncludeSchema } from '../inputTypeSchemas/ContractVersionIncludeSchema'
import { ContractVersionWhereInputSchema } from '../inputTypeSchemas/ContractVersionWhereInputSchema'
import { ContractVersionOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractVersionOrderByWithRelationInputSchema'
import { ContractVersionWhereUniqueInputSchema } from '../inputTypeSchemas/ContractVersionWhereUniqueInputSchema'
import { ContractVersionScalarFieldEnumSchema } from '../inputTypeSchemas/ContractVersionScalarFieldEnumSchema'
import { ContractArgsSchema } from '../outputTypeSchemas/ContractArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractVersionSelectSchema: z.ZodType<Prisma.ContractVersionSelect> = z
    .object({
        id: z.boolean().optional(),
        contractId: z.boolean().optional(),
        versionNumber: z.boolean().optional(),
        changeType: z.boolean().optional(),
        content: z.boolean().optional(),
        contentDiff: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        changelog: z.boolean().optional(),
        tags: z.boolean().optional(),
        fileUrl: z.boolean().optional(),
        fileType: z.boolean().optional(),
        fileSize: z.boolean().optional(),
        fileHash: z.boolean().optional(),
        status: z.boolean().optional(),
        isLatestVersion: z.boolean().optional(),
        isMajorVersion: z.boolean().optional(),
        reviewStatus: z.boolean().optional(),
        reviewedBy: z.boolean().optional(),
        reviewedAt: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        approvedAt: z.boolean().optional(),
        rejectionReason: z.boolean().optional(),
        signatures: z.boolean().optional(),
        signatureStatus: z.boolean().optional(),
        signedBy: z.boolean().optional(),
        signedAt: z.boolean().optional(),
        complianceStatus: z.boolean().optional(),
        complianceNotes: z.boolean().optional(),
        viewCount: z.boolean().optional(),
        downloadCount: z.boolean().optional(),
        lastViewedBy: z.boolean().optional(),
        lastViewedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        archivedAt: z.boolean().optional(),
        archivedBy: z.boolean().optional(),
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional()
    })
    .strict()

export const ContractVersionFindFirstArgsSchema: z.ZodType<Prisma.ContractVersionFindFirstArgs> = z
    .object({
        select: ContractVersionSelectSchema.optional(),
        include: ContractVersionIncludeSchema.optional(),
        where: ContractVersionWhereInputSchema.optional(),
        orderBy: z.union([ContractVersionOrderByWithRelationInputSchema.array(), ContractVersionOrderByWithRelationInputSchema]).optional(),
        cursor: ContractVersionWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ContractVersionScalarFieldEnumSchema, ContractVersionScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ContractVersionFindFirstArgsSchema
