import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { LinkNullableRelationFilterSchema } from './LinkNullableRelationFilterSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';

export const ProgramInviteWhereInputSchema: z.ZodType<Prisma.ProgramInviteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramInviteWhereInputSchema),z.lazy(() => ProgramInviteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramInviteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramInviteWhereInputSchema),z.lazy(() => ProgramInviteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  program: z.union([ z.lazy(() => ProgramRelationFilterSchema),z.lazy(() => ProgramWhereInputSchema) ]).optional(),
  link: z.union([ z.lazy(() => LinkNullableRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional().nullable(),
}).strict();

export default ProgramInviteWhereInputSchema;
