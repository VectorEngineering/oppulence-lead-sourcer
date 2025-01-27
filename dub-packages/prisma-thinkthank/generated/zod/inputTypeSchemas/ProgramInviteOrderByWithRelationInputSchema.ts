import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { LinkOrderByWithRelationInputSchema } from './LinkOrderByWithRelationInputSchema';
import { ProgramInviteOrderByRelevanceInputSchema } from './ProgramInviteOrderByRelevanceInputSchema';

export const ProgramInviteOrderByWithRelationInputSchema: z.ZodType<Prisma.ProgramInviteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  link: z.lazy(() => LinkOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ProgramInviteOrderByRelevanceInputSchema).optional()
}).strict();

export default ProgramInviteOrderByWithRelationInputSchema;
