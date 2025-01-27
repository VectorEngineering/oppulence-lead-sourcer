import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema';
import { NullableEnumDealCompetitorStatusFieldUpdateOperationsInputSchema } from './NullableEnumDealCompetitorStatusFieldUpdateOperationsInputSchema';
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema';
import { NullableEnumDealCompetitorThreatLevelFieldUpdateOperationsInputSchema } from './NullableEnumDealCompetitorThreatLevelFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const DealCompetitorUncheckedUpdateWithoutDealInputSchema: z.ZodType<Prisma.DealCompetitorUncheckedUpdateWithoutDealInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  strengths: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  weaknesses: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  strategy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => DealCompetitorStatusSchema),z.lazy(() => NullableEnumDealCompetitorStatusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  threatLevel: z.union([ z.lazy(() => DealCompetitorThreatLevelSchema),z.lazy(() => NullableEnumDealCompetitorThreatLevelFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default DealCompetitorUncheckedUpdateWithoutDealInputSchema;
