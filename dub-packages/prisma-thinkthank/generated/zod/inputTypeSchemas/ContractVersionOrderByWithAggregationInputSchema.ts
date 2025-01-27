import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ContractVersionCountOrderByAggregateInputSchema } from './ContractVersionCountOrderByAggregateInputSchema';
import { ContractVersionAvgOrderByAggregateInputSchema } from './ContractVersionAvgOrderByAggregateInputSchema';
import { ContractVersionMaxOrderByAggregateInputSchema } from './ContractVersionMaxOrderByAggregateInputSchema';
import { ContractVersionMinOrderByAggregateInputSchema } from './ContractVersionMinOrderByAggregateInputSchema';
import { ContractVersionSumOrderByAggregateInputSchema } from './ContractVersionSumOrderByAggregateInputSchema';

export const ContractVersionOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContractVersionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  contractId: z.lazy(() => SortOrderSchema).optional(),
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  changeType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  contentDiff: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  changelog: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  fileType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fileSize: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fileHash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  isLatestVersion: z.lazy(() => SortOrderSchema).optional(),
  isMajorVersion: z.lazy(() => SortOrderSchema).optional(),
  reviewStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reviewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rejectionReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  signatures: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  signatureStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  signedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  signedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  complianceStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  complianceNotes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  downloadCount: z.lazy(() => SortOrderSchema).optional(),
  lastViewedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastViewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  archivedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  archivedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ContractVersionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ContractVersionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContractVersionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContractVersionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ContractVersionSumOrderByAggregateInputSchema).optional()
}).strict();

export default ContractVersionOrderByWithAggregationInputSchema;
