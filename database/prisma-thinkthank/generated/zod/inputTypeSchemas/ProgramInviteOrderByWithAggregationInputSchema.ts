import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProgramInviteCountOrderByAggregateInputSchema } from './ProgramInviteCountOrderByAggregateInputSchema';
import { ProgramInviteMaxOrderByAggregateInputSchema } from './ProgramInviteMaxOrderByAggregateInputSchema';
import { ProgramInviteMinOrderByAggregateInputSchema } from './ProgramInviteMinOrderByAggregateInputSchema';

export const ProgramInviteOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProgramInviteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProgramInviteCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProgramInviteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProgramInviteMinOrderByAggregateInputSchema).optional()
}).strict();

export default ProgramInviteOrderByWithAggregationInputSchema;
