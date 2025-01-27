import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema';
import { EnumLeadExternalSystemProviderFieldUpdateOperationsInputSchema } from './EnumLeadExternalSystemProviderFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { LeadUpdateOneRequiredWithoutExternalSystemsNestedInputSchema } from './LeadUpdateOneRequiredWithoutExternalSystemsNestedInputSchema';

export const LeadExternalSystemUpdateInputSchema: z.ZodType<Prisma.LeadExternalSystemUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.lazy(() => LeadExternalSystemProviderSchema),z.lazy(() => EnumLeadExternalSystemProviderFieldUpdateOperationsInputSchema) ]).optional(),
  externalId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastSynced: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  syncStatus: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lead: z.lazy(() => LeadUpdateOneRequiredWithoutExternalSystemsNestedInputSchema).optional()
}).strict();

export default LeadExternalSystemUpdateInputSchema;
