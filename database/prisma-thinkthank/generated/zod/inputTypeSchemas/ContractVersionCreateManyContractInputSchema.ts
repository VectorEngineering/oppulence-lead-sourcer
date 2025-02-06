import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const ContractVersionCreateManyContractInputSchema: z.ZodType<Prisma.ContractVersionCreateManyContractInput> = z.object({
  id: z.string().cuid().optional(),
  versionNumber: z.number().int(),
  changeType: z.string(),
  content: z.string(),
  contentDiff: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  changelog: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  fileUrl: z.string(),
  fileType: z.string().optional().nullable(),
  fileSize: z.number().int().optional().nullable(),
  fileHash: z.string().optional().nullable(),
  status: z.string(),
  isLatestVersion: z.boolean().optional(),
  isMajorVersion: z.boolean().optional(),
  reviewStatus: z.string().optional().nullable(),
  reviewedBy: z.string().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.coerce.date().optional().nullable(),
  rejectionReason: z.string().optional().nullable(),
  signatures: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  signatureStatus: z.string().optional().nullable(),
  signedBy: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  signedAt: z.coerce.date().optional().nullable(),
  complianceStatus: z.string().optional().nullable(),
  complianceNotes: z.string().optional().nullable(),
  viewCount: z.number().int().optional(),
  downloadCount: z.number().int().optional(),
  lastViewedBy: z.string().optional().nullable(),
  lastViewedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  archivedAt: z.coerce.date().optional().nullable(),
  archivedBy: z.string().optional().nullable()
}).strict();

export default ContractVersionCreateManyContractInputSchema;
