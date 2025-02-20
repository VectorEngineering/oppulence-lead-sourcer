import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProgramInviteScalarWhereInputSchema: z.ZodType<Prisma.ProgramInviteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramInviteScalarWhereInputSchema),z.lazy(() => ProgramInviteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramInviteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramInviteScalarWhereInputSchema),z.lazy(() => ProgramInviteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ProgramInviteScalarWhereInputSchema;
