import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ReportTypeSchema } from './ReportTypeSchema';
import { EnumReportTypeFieldUpdateOperationsInputSchema } from './EnumReportTypeFieldUpdateOperationsInputSchema';
import { ReportFormatSchema } from './ReportFormatSchema';
import { EnumReportFormatFieldUpdateOperationsInputSchema } from './EnumReportFormatFieldUpdateOperationsInputSchema';
import { ReportStatusSchema } from './ReportStatusSchema';
import { EnumReportStatusFieldUpdateOperationsInputSchema } from './EnumReportStatusFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutReportsNestedInputSchema } from './UserUpdateOneWithoutReportsNestedInputSchema';
import { ProjectUpdateOneWithoutReportNestedInputSchema } from './ProjectUpdateOneWithoutReportNestedInputSchema';
import { ReportSortingUpdateManyWithoutReportNestedInputSchema } from './ReportSortingUpdateManyWithoutReportNestedInputSchema';
import { ReportColumnUpdateManyWithoutReportNestedInputSchema } from './ReportColumnUpdateManyWithoutReportNestedInputSchema';
import { ReportScheduleUpdateManyWithoutReportNestedInputSchema } from './ReportScheduleUpdateManyWithoutReportNestedInputSchema';
import { ReportRecipientUpdateManyWithoutReportNestedInputSchema } from './ReportRecipientUpdateManyWithoutReportNestedInputSchema';
import { ReportAccessUpdateManyWithoutReportNestedInputSchema } from './ReportAccessUpdateManyWithoutReportNestedInputSchema';

export const ReportUpdateWithoutFiltersInputSchema: z.ZodType<Prisma.ReportUpdateWithoutFiltersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => ReportTypeSchema),z.lazy(() => EnumReportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  format: z.union([ z.lazy(() => ReportFormatSchema),z.lazy(() => EnumReportFormatFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ReportStatusSchema),z.lazy(() => EnumReportStatusFieldUpdateOperationsInputSchema) ]).optional(),
  from: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  to: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeZone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fileUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  fileSize: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageCount: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rowCount: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  currency: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  language: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  template: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  watermark: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isScheduled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  visibility: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shareUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shortLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  downloadCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  viewCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  processingTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastError: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  retryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expireAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastAccessedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creator: z.lazy(() => UserUpdateOneWithoutReportsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneWithoutReportNestedInputSchema).optional(),
  sortings: z.lazy(() => ReportSortingUpdateManyWithoutReportNestedInputSchema).optional(),
  columns: z.lazy(() => ReportColumnUpdateManyWithoutReportNestedInputSchema).optional(),
  schedules: z.lazy(() => ReportScheduleUpdateManyWithoutReportNestedInputSchema).optional(),
  recipients: z.lazy(() => ReportRecipientUpdateManyWithoutReportNestedInputSchema).optional(),
  accessUsers: z.lazy(() => ReportAccessUpdateManyWithoutReportNestedInputSchema).optional()
}).strict();

export default ReportUpdateWithoutFiltersInputSchema;
