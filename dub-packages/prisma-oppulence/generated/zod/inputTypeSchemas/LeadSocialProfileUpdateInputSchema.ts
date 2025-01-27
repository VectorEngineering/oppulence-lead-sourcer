import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';
import { EnumLeadSocialPlatformFieldUpdateOperationsInputSchema } from './EnumLeadSocialPlatformFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { LeadUpdateOneRequiredWithoutSocialProfilesNestedInputSchema } from './LeadUpdateOneRequiredWithoutSocialProfilesNestedInputSchema';

export const LeadSocialProfileUpdateInputSchema: z.ZodType<Prisma.LeadSocialProfileUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  platform: z.union([ z.lazy(() => LeadSocialPlatformSchema),z.lazy(() => EnumLeadSocialPlatformFieldUpdateOperationsInputSchema) ]).optional(),
  profileUrl: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastSynced: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lead: z.lazy(() => LeadUpdateOneRequiredWithoutSocialProfilesNestedInputSchema).optional()
}).strict();

export default LeadSocialProfileUpdateInputSchema;
