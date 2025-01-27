import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramInviteSelectSchema } from '../inputTypeSchemas/ProgramInviteSelectSchema';
import { ProgramInviteIncludeSchema } from '../inputTypeSchemas/ProgramInviteIncludeSchema';

export const ProgramInviteArgsSchema: z.ZodType<Prisma.ProgramInviteDefaultArgs> = z.object({
  select: z.lazy(() => ProgramInviteSelectSchema).optional(),
  include: z.lazy(() => ProgramInviteIncludeSchema).optional(),
}).strict();

export default ProgramInviteArgsSchema;
