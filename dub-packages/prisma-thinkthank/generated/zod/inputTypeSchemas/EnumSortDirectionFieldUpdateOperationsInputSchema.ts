import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortDirectionSchema } from './SortDirectionSchema';

export const EnumSortDirectionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSortDirectionFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SortDirectionSchema).optional()
}).strict();

export default EnumSortDirectionFieldUpdateOperationsInputSchema;
