import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProgramInviteCreateManyProgramInputSchema: z.ZodType<Prisma.ProgramInviteCreateManyProgramInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  linkId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ProgramInviteCreateManyProgramInputSchema;
