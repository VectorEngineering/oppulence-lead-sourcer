import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CampaignTypeSchema } from './CampaignTypeSchema';
import { EnumCampaignTypeFieldUpdateOperationsInputSchema } from './EnumCampaignTypeFieldUpdateOperationsInputSchema';
import { CampaignStatusSchema } from './CampaignStatusSchema';
import { EnumCampaignStatusFieldUpdateOperationsInputSchema } from './EnumCampaignStatusFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { LeadTouchpointUncheckedUpdateManyWithoutCampaignNestedInputSchema } from './LeadTouchpointUncheckedUpdateManyWithoutCampaignNestedInputSchema';
import { CampaignVariantUncheckedUpdateManyWithoutCampaignNestedInputSchema } from './CampaignVariantUncheckedUpdateManyWithoutCampaignNestedInputSchema';

export const CampaignUncheckedUpdateWithoutLeadsInputSchema: z.ZodType<Prisma.CampaignUncheckedUpdateWithoutLeadsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => CampaignTypeSchema),z.lazy(() => EnumCampaignTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CampaignStatusSchema),z.lazy(() => EnumCampaignStatusFieldUpdateOperationsInputSchema) ]).optional(),
  budget: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  actualSpend: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  impressions: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clicks: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  conversions: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  revenue: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  roi: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utmSource: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utmMedium: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utmCampaign: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utmContent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utmTerm: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  abTestEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  touchpoints: z.lazy(() => LeadTouchpointUncheckedUpdateManyWithoutCampaignNestedInputSchema).optional(),
  variants: z.lazy(() => CampaignVariantUncheckedUpdateManyWithoutCampaignNestedInputSchema).optional()
}).strict();

export default CampaignUncheckedUpdateWithoutLeadsInputSchema;
