import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceOrderByRelevanceFieldEnumSchema } from './ProgramResourceOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramResourceOrderByRelevanceInputSchema: z.ZodType<Prisma.ProgramResourceOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ProgramResourceOrderByRelevanceFieldEnumSchema),z.lazy(() => ProgramResourceOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ProgramResourceOrderByRelevanceInputSchema;
