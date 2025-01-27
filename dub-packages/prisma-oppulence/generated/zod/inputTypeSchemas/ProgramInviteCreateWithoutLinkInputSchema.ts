import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateNestedOneWithoutInvitesInputSchema } from './ProgramCreateNestedOneWithoutInvitesInputSchema';

export const ProgramInviteCreateWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteCreateWithoutLinkInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  program: z.lazy(() => ProgramCreateNestedOneWithoutInvitesInputSchema)
}).strict();

export default ProgramInviteCreateWithoutLinkInputSchema;
