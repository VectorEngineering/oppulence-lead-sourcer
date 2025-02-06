import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema } from './PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema';
import { PasswordResetTokenWhereInputSchema } from './PasswordResetTokenWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PasswordResetTokenWhereUniqueInputSchema: z.ZodType<Prisma.PasswordResetTokenWhereUniqueInput> = z.union([
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => PasswordResetTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PasswordResetTokenWhereInputSchema),z.lazy(() => PasswordResetTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PasswordResetTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PasswordResetTokenWhereInputSchema),z.lazy(() => PasswordResetTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default PasswordResetTokenWhereUniqueInputSchema;
