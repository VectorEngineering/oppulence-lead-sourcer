import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentOrderByRelevanceFieldEnumSchema } from './ProgramEnrollmentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramEnrollmentOrderByRelevanceInputSchema: z.ZodType<Prisma.ProgramEnrollmentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ProgramEnrollmentOrderByRelevanceFieldEnumSchema),z.lazy(() => ProgramEnrollmentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ProgramEnrollmentOrderByRelevanceInputSchema;
