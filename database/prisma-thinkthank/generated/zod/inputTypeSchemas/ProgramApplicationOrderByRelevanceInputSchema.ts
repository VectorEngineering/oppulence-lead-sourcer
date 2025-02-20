import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationOrderByRelevanceFieldEnumSchema } from './ProgramApplicationOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramApplicationOrderByRelevanceInputSchema: z.ZodType<Prisma.ProgramApplicationOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ProgramApplicationOrderByRelevanceFieldEnumSchema),z.lazy(() => ProgramApplicationOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ProgramApplicationOrderByRelevanceInputSchema;
