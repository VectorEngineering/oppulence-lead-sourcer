import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MatchingStrategySchema } from './MatchingStrategySchema';

export const EnumMatchingStrategyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumMatchingStrategyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => MatchingStrategySchema).optional()
}).strict();

export default EnumMatchingStrategyFieldUpdateOperationsInputSchema;
