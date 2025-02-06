import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateNestedOneWithoutInvitesInputSchema } from './ProgramCreateNestedOneWithoutInvitesInputSchema';
import { LinkCreateNestedOneWithoutProgramInviteInputSchema } from './LinkCreateNestedOneWithoutProgramInviteInputSchema';

export const ProgramInviteCreateInputSchema: z.ZodType<Prisma.ProgramInviteCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  program: z.lazy(() => ProgramCreateNestedOneWithoutInvitesInputSchema),
  link: z.lazy(() => LinkCreateNestedOneWithoutProgramInviteInputSchema).optional()
}).strict();

export default ProgramInviteCreateInputSchema;
