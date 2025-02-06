import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractVersionIncludeSchema } from '../inputTypeSchemas/ContractVersionIncludeSchema'
import { ContractVersionWhereUniqueInputSchema } from '../inputTypeSchemas/ContractVersionWhereUniqueInputSchema'
import { ContractVersionCreateInputSchema } from '../inputTypeSchemas/ContractVersionCreateInputSchema'
import { ContractVersionUncheckedCreateInputSchema } from '../inputTypeSchemas/ContractVersionUncheckedCreateInputSchema'
import { ContractVersionUpdateInputSchema } from '../inputTypeSchemas/ContractVersionUpdateInputSchema'
import { ContractVersionUncheckedUpdateInputSchema } from '../inputTypeSchemas/ContractVersionUncheckedUpdateInputSchema'
import { ContractArgsSchema } from "../outputTypeSchemas/ContractArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractVersionSelectSchema: z.ZodType<Prisma.ContractVersionSelect> = z.object({
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
  contract: z.union([z.boolean(),z.lazy(() => ContractArgsSchema)]).optional(),
}).strict()

export const ContractVersionUpsertArgsSchema: z.ZodType<Prisma.ContractVersionUpsertArgs> = z.object({
  select: ContractVersionSelectSchema.optional(),
  include: ContractVersionIncludeSchema.optional(),
  where: ContractVersionWhereUniqueInputSchema,
  create: z.union([ ContractVersionCreateInputSchema,ContractVersionUncheckedCreateInputSchema ]),
  update: z.union([ ContractVersionUpdateInputSchema,ContractVersionUncheckedUpdateInputSchema ]),
}).strict() ;

export default ContractVersionUpsertArgsSchema;
