import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramUpdateWithoutInvitesInputSchema } from './ProgramUpdateWithoutInvitesInputSchema';
import { ProgramUncheckedUpdateWithoutInvitesInputSchema } from './ProgramUncheckedUpdateWithoutInvitesInputSchema';
import { ProgramCreateWithoutInvitesInputSchema } from './ProgramCreateWithoutInvitesInputSchema';
import { ProgramUncheckedCreateWithoutInvitesInputSchema } from './ProgramUncheckedCreateWithoutInvitesInputSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';

export const ProgramUpsertWithoutInvitesInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutInvitesInput> = z.object({
  update: z.union([ z.lazy(() => ProgramUpdateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutInvitesInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramCreateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutInvitesInputSchema) ]),
  where: z.lazy(() => ProgramWhereInputSchema).optional()
}).strict();

export default ProgramUpsertWithoutInvitesInputSchema;
