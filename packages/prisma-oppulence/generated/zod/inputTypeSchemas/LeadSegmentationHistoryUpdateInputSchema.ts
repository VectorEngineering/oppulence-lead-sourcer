import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LeadSegmentationUpdateOneRequiredWithoutSegmentationHistoryNestedInputSchema } from './LeadSegmentationUpdateOneRequiredWithoutSegmentationHistoryNestedInputSchema';

export const LeadSegmentationHistoryUpdateInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  previousSegments: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  newSegments: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  segmentation: z.lazy(() => LeadSegmentationUpdateOneRequiredWithoutSegmentationHistoryNestedInputSchema).optional()
}).strict();

export default LeadSegmentationHistoryUpdateInputSchema;
