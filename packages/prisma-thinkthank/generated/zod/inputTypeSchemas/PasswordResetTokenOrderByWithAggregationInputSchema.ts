import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PasswordResetTokenCountOrderByAggregateInputSchema } from './PasswordResetTokenCountOrderByAggregateInputSchema';
import { PasswordResetTokenMaxOrderByAggregateInputSchema } from './PasswordResetTokenMaxOrderByAggregateInputSchema';
import { PasswordResetTokenMinOrderByAggregateInputSchema } from './PasswordResetTokenMinOrderByAggregateInputSchema';

export const PasswordResetTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.PasswordResetTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PasswordResetTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PasswordResetTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PasswordResetTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export default PasswordResetTokenOrderByWithAggregationInputSchema;
