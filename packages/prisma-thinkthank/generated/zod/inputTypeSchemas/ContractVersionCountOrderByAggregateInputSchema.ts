import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractVersionCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContractVersionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  contractId: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  changeType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  contentDiff: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  changelog: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  fileType: z.lazy(() => SortOrderSchema).optional(),
  fileSize: z.lazy(() => SortOrderSchema).optional(),
  fileHash: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  isLatestVersion: z.lazy(() => SortOrderSchema).optional(),
  isMajorVersion: z.lazy(() => SortOrderSchema).optional(),
  reviewStatus: z.lazy(() => SortOrderSchema).optional(),
  reviewedBy: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedAt: z.lazy(() => SortOrderSchema).optional(),
  rejectionReason: z.lazy(() => SortOrderSchema).optional(),
  signatures: z.lazy(() => SortOrderSchema).optional(),
  signatureStatus: z.lazy(() => SortOrderSchema).optional(),
  signedBy: z.lazy(() => SortOrderSchema).optional(),
  signedAt: z.lazy(() => SortOrderSchema).optional(),
  complianceStatus: z.lazy(() => SortOrderSchema).optional(),
  complianceNotes: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  downloadCount: z.lazy(() => SortOrderSchema).optional(),
  lastViewedBy: z.lazy(() => SortOrderSchema).optional(),
  lastViewedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  updatedBy: z.lazy(() => SortOrderSchema).optional(),
  archivedAt: z.lazy(() => SortOrderSchema).optional(),
  archivedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractVersionCountOrderByAggregateInputSchema;
