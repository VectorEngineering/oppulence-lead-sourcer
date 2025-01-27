import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteEmailProgramIdCompoundUniqueInputSchema } from './ProgramInviteEmailProgramIdCompoundUniqueInputSchema';
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { LinkNullableRelationFilterSchema } from './LinkNullableRelationFilterSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';

export const ProgramInviteWhereUniqueInputSchema: z.ZodType<Prisma.ProgramInviteWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    linkId: z.string(),
    email_programId: z.lazy(() => ProgramInviteEmailProgramIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
    linkId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    email_programId: z.lazy(() => ProgramInviteEmailProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    linkId: z.string(),
    email_programId: z.lazy(() => ProgramInviteEmailProgramIdCompoundUniqueInputSchema),
  }),
  z.object({
    linkId: z.string(),
  }),
  z.object({
    email_programId: z.lazy(() => ProgramInviteEmailProgramIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  linkId: z.string().optional(),
  email_programId: z.lazy(() => ProgramInviteEmailProgramIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProgramInviteWhereInputSchema),z.lazy(() => ProgramInviteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramInviteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramInviteWhereInputSchema),z.lazy(() => ProgramInviteWhereInputSchema).array() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  program: z.union([ z.lazy(() => ProgramRelationFilterSchema),z.lazy(() => ProgramWhereInputSchema) ]).optional(),
  link: z.union([ z.lazy(() => LinkNullableRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional().nullable(),
}).strict());

export default ProgramInviteWhereUniqueInputSchema;
