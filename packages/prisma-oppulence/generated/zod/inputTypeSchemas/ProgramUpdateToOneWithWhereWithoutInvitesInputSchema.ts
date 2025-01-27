import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramUpdateWithoutInvitesInputSchema } from './ProgramUpdateWithoutInvitesInputSchema';
import { ProgramUncheckedUpdateWithoutInvitesInputSchema } from './ProgramUncheckedUpdateWithoutInvitesInputSchema';

export const ProgramUpdateToOneWithWhereWithoutInvitesInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutInvitesInput> = z.object({
  where: z.lazy(() => ProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutInvitesInputSchema) ]),
}).strict();

export default ProgramUpdateToOneWithWhereWithoutInvitesInputSchema;
