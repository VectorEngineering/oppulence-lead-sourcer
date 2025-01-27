import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportAccessReportIdUserIdCompoundUniqueInputSchema } from './ReportAccessReportIdUserIdCompoundUniqueInputSchema';
import { ReportAccessWhereInputSchema } from './ReportAccessWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const ReportAccessWhereUniqueInputSchema: z.ZodType<Prisma.ReportAccessWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    reportId_userId: z.lazy(() => ReportAccessReportIdUserIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    reportId_userId: z.lazy(() => ReportAccessReportIdUserIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  reportId_userId: z.lazy(() => ReportAccessReportIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ReportAccessWhereInputSchema),z.lazy(() => ReportAccessWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportAccessWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportAccessWhereInputSchema),z.lazy(() => ReportAccessWhereInputSchema).array() ]).optional(),
  reportId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  report: z.union([ z.lazy(() => ReportRelationFilterSchema),z.lazy(() => ReportWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default ReportAccessWhereUniqueInputSchema;
