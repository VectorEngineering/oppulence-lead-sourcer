import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumReportTypeFilterSchema } from './EnumReportTypeFilterSchema';
import { ReportTypeSchema } from './ReportTypeSchema';
import { EnumReportFormatFilterSchema } from './EnumReportFormatFilterSchema';
import { ReportFormatSchema } from './ReportFormatSchema';
import { EnumReportStatusFilterSchema } from './EnumReportStatusFilterSchema';
import { ReportStatusSchema } from './ReportStatusSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ReportFilterListRelationFilterSchema } from './ReportFilterListRelationFilterSchema';
import { ReportSortingListRelationFilterSchema } from './ReportSortingListRelationFilterSchema';
import { ReportColumnListRelationFilterSchema } from './ReportColumnListRelationFilterSchema';
import { ReportScheduleListRelationFilterSchema } from './ReportScheduleListRelationFilterSchema';
import { ReportRecipientListRelationFilterSchema } from './ReportRecipientListRelationFilterSchema';
import { ReportAccessListRelationFilterSchema } from './ReportAccessListRelationFilterSchema';

export const ReportWhereInputSchema: z.ZodType<Prisma.ReportWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReportWhereInputSchema),z.lazy(() => ReportWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportWhereInputSchema),z.lazy(() => ReportWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumReportTypeFilterSchema),z.lazy(() => ReportTypeSchema) ]).optional(),
  format: z.union([ z.lazy(() => EnumReportFormatFilterSchema),z.lazy(() => ReportFormatSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumReportStatusFilterSchema),z.lazy(() => ReportStatusSchema) ]).optional(),
  from: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  to: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timeZone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fileUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fileSize: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  pageCount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  rowCount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  template: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  watermark: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isScheduled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  visibility: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shareUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shortLink: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  downloadCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  viewCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  processingTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  lastError: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  retryCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expireAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastAccessedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  scheduledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  creator: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectNullableRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional().nullable(),
  filters: z.lazy(() => ReportFilterListRelationFilterSchema).optional(),
  sortings: z.lazy(() => ReportSortingListRelationFilterSchema).optional(),
  columns: z.lazy(() => ReportColumnListRelationFilterSchema).optional(),
  schedules: z.lazy(() => ReportScheduleListRelationFilterSchema).optional(),
  recipients: z.lazy(() => ReportRecipientListRelationFilterSchema).optional(),
  accessUsers: z.lazy(() => ReportAccessListRelationFilterSchema).optional()
}).strict();

export default ReportWhereInputSchema;
