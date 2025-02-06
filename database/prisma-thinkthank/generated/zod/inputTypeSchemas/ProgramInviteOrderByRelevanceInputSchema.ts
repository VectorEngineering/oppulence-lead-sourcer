import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteOrderByRelevanceFieldEnumSchema } from './ProgramInviteOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ProgramInviteOrderByRelevanceInputSchema: z.ZodType<Prisma.ProgramInviteOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => ProgramInviteOrderByRelevanceFieldEnumSchema),z.lazy(() => ProgramInviteOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default ProgramInviteOrderByRelevanceInputSchema;
