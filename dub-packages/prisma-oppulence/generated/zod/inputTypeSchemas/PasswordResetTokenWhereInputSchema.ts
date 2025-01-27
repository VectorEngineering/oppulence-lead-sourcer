import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PasswordResetTokenWhereInputSchema: z.ZodType<Prisma.PasswordResetTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PasswordResetTokenWhereInputSchema),z.lazy(() => PasswordResetTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PasswordResetTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PasswordResetTokenWhereInputSchema),z.lazy(() => PasswordResetTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PasswordResetTokenWhereInputSchema;
