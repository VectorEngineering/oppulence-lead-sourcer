import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FilterOperatorSchema } from './FilterOperatorSchema';
import { EnumFilterOperatorFieldUpdateOperationsInputSchema } from './EnumFilterOperatorFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ReportUpdateOneRequiredWithoutFiltersNestedInputSchema } from './ReportUpdateOneRequiredWithoutFiltersNestedInputSchema';

export const ReportFilterUpdateInputSchema: z.ZodType<Prisma.ReportFilterUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  operator: z.union([ z.lazy(() => FilterOperatorSchema),z.lazy(() => EnumFilterOperatorFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  valueType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  report: z.lazy(() => ReportUpdateOneRequiredWithoutFiltersNestedInputSchema).optional()
}).strict();

export default ReportFilterUpdateInputSchema;
