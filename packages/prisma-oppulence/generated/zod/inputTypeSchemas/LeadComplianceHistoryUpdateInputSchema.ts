import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LeadComplianceAuditUpdateOneRequiredWithoutAuditHistoryNestedInputSchema } from './LeadComplianceAuditUpdateOneRequiredWithoutAuditHistoryNestedInputSchema';

export const LeadComplianceHistoryUpdateInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  performedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  complianceAudit: z.lazy(() => LeadComplianceAuditUpdateOneRequiredWithoutAuditHistoryNestedInputSchema).optional()
}).strict();

export default LeadComplianceHistoryUpdateInputSchema;
